import React, { Component } from 'react';
import uuid from 'uuid/v4';

import context from '../../../store/context/Grids';
import { updateGridAction } from '../../../store/actions/Grids';
import { getGrid } from "../../../store/selectors/Grids";

import { NumberOrOne } from '../../../static/Math';

import './index.styl';


export class Grid extends Component {
    constructor (props) {
        super(props);
        this.getStyle = this.getStyle.bind(this);

        this.state = { uuid: uuid(), childrenInfos: [], columns: 1, rows: 1 };
    }

    componentDidMount() {
        const { uuid } = this.state;
        const { dispatch } = this.context;

        dispatch(updateGridAction({ griduuid: uuid, elements: {} }));
    }

    componentWillReceiveProps (nextProps, nextContext) {
        const { uuid } = this.state;

        const actualGrid = getGrid(this.context.state, { uuid });
        const nextGrid = getGrid(nextContext.state, { uuid });

        if (!nextGrid) return;

        if (JSON.stringify(actualGrid) !== JSON.stringify(nextGrid)) {
            this.setState(() => ({
                childrenInfos: Object.values(nextGrid),
            }))
        }
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const actualGrid = getGrid(this.context.state, { uuid });
        const nextGrid = getGrid(nextContext.state, { uuid });

        return JSON.stringify(actualGrid) !== JSON.stringify(nextGrid);
    }


    static generateTemplate({ propsTemplate, dimension }) {
        if (!propsTemplate && dimension !== undefined) return 'auto '.repeat(dimension);
        if (typeof propsTemplate === typeof '') return propsTemplate;
        if (dimension) {
            let template = '';
            for (let i = 1; i < dimension + 1; i++) {
                const itemTemplate = propsTemplate[i];
                template += (typeof itemTemplate === typeof '') ? itemTemplate : 'auto';
                template += ' ';
            }
            return template;
        }
        return 'fit-content(100%)'
    }


    calculateGridSize() {
        const { colsCount, rowsCount } = this.props;
        if (colsCount && rowsCount) return { col: colsCount, row: rowsCount };

        const { childrenInfos } = this.state;
        if (!childrenInfos || childrenInfos.length <= 0) return { col: 1, row: 1 };

        let currentRow = 1;
        const rows = [];

        childrenInfos.forEach(childInfos => {
            if (!childInfos) return;

            const isAuto = (!childInfos.col || !childInfos.row);
            if (isAuto) {
                childInfos.col = childInfos.col || 'auto';
                childInfos.row = childInfos.row || currentRow;
            }

            if (childInfos.fullWidth) currentRow += childInfos.height;

            if (!rows[childInfos.row]) rows[childInfos.row] = {width: 0, height: 0}; // create row on first entry of each row

            const colSize = NumberOrOne(childInfos.col) + childInfos.width - 1; // Because col n with width 1 should return a col of n instead of n + 1

            const width = (childInfos.col === 'auto') ? rows[childInfos.row].width + colSize :  Math.max(rows[childInfos.row].width, colSize);
            const height = Math.max(rows[childInfos.row].height, childInfos.height);

            rows[childInfos.row] = {width, height};
        });
        console.log('BONJOUR LOUIS', rows);

        let maxCol = 1;
        let maxRow = 1;
        rows.forEach((row, index) => {
            if (!row || !row.width || !row.height) return null;
            maxCol = Math.max(maxCol, row.width);
            maxRow = Math.max(maxRow, NumberOrOne(index) + row.height - 1);
        });

        return { x: maxCol, y: maxRow };
    }


	findNextEmptyCoordinates() {
		return { col: 1, row: 1 };
	}


	getVirtualGrid() {
        let currentRow = 0;
        const rows = [];
        this.state.childrenInfos.forEach(childInfos => {

            let { type, col, row, width, height, fullwidth, fullheight, selfRowTemplate, selfColTemplate } = childInfos;
            if (row !== 'auto' && row > currentRow) {
                currentRow = row;
            }
            else if (row === 'auto') {
                row = currentRow;
            }

            if (fullwidth) {
                rows[row - 1] = { template: selfRowTemplate || 'auto' };
            }
            else {
                const rowWidth = get(rows, `[${row - 1}].width`);

                rows[row - 1] = { width: (rowWidth || 0) + col + width - 1 }
            }

            console.log('child infos :', type, '=>', childInfos, rows);
        });
    }

    // constructGrid (children, gridDimensions) {
    //
    //     if (!children) return { editedChildren: null, gridDimensions };
    //
    //     const grid = Array(gridDimensions.y).fill(Array(gridDimensions.x).fill(0));
    //
    //     const childrenInfos = [];
    //     const editedChildren = React.Children.map(children, child => {
    //         if (!child || !child.props) return child;
    //
    //         const { col, row, width, height, fullwidth, fullheight } = child.props;
    //         const newChildProps = { };
    //
    //         newChildProps.width = fullwidth === 'true' ? gridDimensions.x : width;
    //
    //         if (fullwidth === 'true') console.log('gdX =', gridDimensions.x);
    //
    //         // console.log('Ok here', newChildProps);
    //         // return child;
    //         return React.cloneElement(child, { ...child.props, griduuid: this.state.uuid });
    //     });
    //     return editedChildren;
    // }


    injectUuid (children) {
        const { uuid } = this.state;
        return React.Children.map(children, child => {
            return React.cloneElement(child, { ...child.props, griduuid: uuid });
        });
    }


    // to perform
    getStyle() {
        const { children, style, columnsTemplate, rowsTemplate, gap = '', rowGap = gap, colGap = gap } = this.props;
        const { rows, ...dimensions } = this.calculateGridSize(children);
        this.getVirtualGrid();
        this.gridDimensions = dimensions;

        const gridTemplateRows = Grid.generateTemplate({ propsTemplate: rowsTemplate, dimension: dimensions.y});
        const gridTemplateColumns = Grid.generateTemplate({ propsTemplate: columnsTemplate, dimension: dimensions.x});

        return {
            gridTemplateColumns,
            gridTemplateRows,
            gridRowGap: rowGap,
            gridColumnGap: colGap,
            ...style
        };
    }

    render() {
        const { className, children } = this.props;

        return (
            <div className={`grid ${className || ''}`} style={this.getStyle()}>
                { this.injectUuid(children) }
            </div>
        );
    }
}

Grid.contextType = context;

export { Element, Row, BasicElement } from './GridElement';
