import React, { Component } from 'react';
import uuid from 'uuid/v4';
import get from 'lodash.get';

import context from '../../../store/context/Grids';
import {createGrid, updateGrid} from '../../../store/actions/Grids';
import { getElements, getGrid, getGridDimensions, getGridHeight, getGridWidth } from "../../../store/selectors/Grids";

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

        dispatch(createGrid({ uuid, elements: {} }));
    }

    componentWillReceiveProps (nextProps, nextContext) {
        const { uuid } = this.state;

        const actualChildrenInfos = getElements(this.context.store, { uuid });
        const nextChildrenInfos = getElements(nextContext.store, { uuid });

        if (!nextChildrenInfos) return;

        if (JSON.stringify(actualChildrenInfos) !== JSON.stringify(nextChildrenInfos)) {
            this.setState(() => ({
                childrenInfos: getElements(nextContext.store, { uuid }),
            }));
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateGridDimensions();
    }



    static generateTemplate({ propsTemplate, dimension }) {
        if (propsTemplate && typeof propsTemplate === typeof '') return propsTemplate;
        if (dimension) {
            const templates = [];
            for (let i = 0; i < dimension; i++) {
                if (propsTemplate && propsTemplate[i + 1]) {
                    templates[i] = propsTemplate[i + 1];
                } else {
                    templates[i] = 'auto';
                }
            }
            return templates.filter(e => !!e).join(' ');
        }
        return 'fit-content(100%)'
    }



    calculateGridSize() {
        const { colsCount, rowsCount } = this.props;
        if (colsCount && rowsCount) return { width: colsCount, height: rowsCount };

        const { childrenInfos } = this.state;
        if (!childrenInfos || childrenInfos.length <= 0) return { width: 1, height: 1 };


        let currentRow = 1;
        const rows = [];

        Object.values(childrenInfos).forEach(childInfos => {
            if (!childInfos) return;

            // if (childInfos.fullWidth) currentRow += childInfos.height;
            if (!rows[childInfos.row]) rows[childInfos.row] = {width: 0, height: 0}; // create row on first entry of each row


            const colSize = NumberOrOne(childInfos.col) + childInfos.width - 1; // Because col n with width 1 should return a col of n instead of n + 1

            const width = (childInfos.col === 'auto') ? rows[childInfos.row].width + colSize : Math.max(rows[childInfos.row].width, colSize);
            const height = Math.max(rows[childInfos.row].height, childInfos.height);


            rows[childInfos.row] = {width, height};
        });


        let maxCol = 1;
        let maxRow = 1;
        rows.forEach((row, index) => {
            if (!row || !row.width || !row.height) return null;
            maxCol = Math.max(maxCol, row.width);
            maxRow = Math.max(maxRow, NumberOrOne(index) + row.height - 1);
        });

        return { width: maxCol, height: maxRow };
    }

    updateGridDimensions() {
        const { uuid } = this.state;
        const { store, dispatch } = this.context;

        const gridSize = this.calculateGridSize();


        if (JSON.stringify(getGridDimensions(store, { uuid })) !== JSON.stringify(gridSize)) {
            dispatch(updateGrid({ uuid: uuid, ...gridSize }));
        }
    }


	findNextEmptyCoordinates() {
		return { width: 1, height: 1 };
	}


	getVirtualGrid() {
        // let currentRow = 0;
        // const rows = [];
        // this.state.childrenInfos.forEach(childInfos => {
        //
        //     let { type, col, row, width, height, fullwidth, fullheight, selfRowTemplate, selfColTemplate } = childInfos;
        //     if (row !== 'auto' && row > currentRow) {
        //         currentRow = row;
        //     }
        //     else if (row === 'auto') {
        //         row = currentRow;
        //     }
        //
        //     if (fullwidth) {
        //         rows[row - 1] = { template: selfRowTemplate || 'auto' };
        //     }
        //     else {
        //         const rowWidth = get(rows, `[${row - 1}].width`);
        //
        //         rows[row - 1] = { width: (rowWidth || 0) + col + width - 1 }
        //     }
        //
        //     console.log('child infos :', type, '=>', childInfos, rows);
        // });
    }

    // constructGrid (children, gridDimensions) {
    //
    //     if (!children) return { editedChildren: null, gridDimensions };
    //
    //     const grid = Array(gridDimensions.height).fill(Array(gridDimensions.width).fill(0));
    //
    //     const childrenInfos = [];
    //     const editedChildren = React.Children.map(children, child => {
    //         if (!child || !child.props) return child;
    //
    //         const { col, row, width, height, fullwidth, fullheight } = child.props;
    //         const newChildProps = { };
    //
    //         newChildProps.width = fullwidth === 'true' ? gridDimensions.width : width;
    //
    //         if (fullwidth === 'true') console.log('gdX =', gridDimensions.width);
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
        const { store } = this.context
        const { style, columnsTemplate, rowsTemplate, gap = '', rowGap = gap, colGap = gap } = this.props;

        const dimensions = getGridDimensions(store, { uuid: this.state.uuid });

        // this.getVirtualGrid();
        this.gridDimensions = dimensions;

        const gridTemplateRows = Grid.generateTemplate({ propsTemplate: rowsTemplate, dimension: dimensions.height});
        const gridTemplateColumns = Grid.generateTemplate({ propsTemplate: columnsTemplate, dimension: dimensions.width});

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
