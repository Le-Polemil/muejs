import React, { Component } from 'react';
import uuid from 'uuid/v4';

import context from '../../../store/context/Grids';
import { createGrid, updateGridDimensions } from '../../../store/actions/Grids';
import { getGridElements, getGridDimensions, getGridHeight, getGridWidth } from "../../../store/selectors/Grids";

import { NumberOrOne } from '../../../static/Math';

import { getTemplateLength, generateTemplate } from './static';

import './index.styl';



export class Grid extends Component {
    constructor (props) {
        super(props);
        this.getStyle = this.getStyle.bind(this);

        this.state = {
            id: [null, undefined].includes(props.idgrid) ? uuid() : props.idgrid,
            columns: 1,
            rows: 1,
        };
    }


    componentDidMount() {
        const { id } = this.state;
        const { dispatch } = this.context;

        dispatch(createGrid({ grid: id, data: { elements: {}, width: 1, height: 1 } }));
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateDimensions();
    }


	updateDimensions() {
		const { id } = this.state;
		const { store, dispatch } = this.context;

		const { width, height } = this.calculateGridSize();


		if (width === undefined || height === undefined) return;

		if (width && width === getGridWidth(store, { grid: id }) &&
			height && height === getGridHeight(store, { grid: id })) return;

		dispatch(updateGridDimensions({ grid: id, width, height }));
	}


    calculateGridSize() {
        const {
	        columnsTemplate,
	        rowsTemplate,
        } = this.props;
        const { store } = this.context;
        const { id } = this.state;


        const childrenInfos  = getGridElements(store, { grid: id });
        if (!childrenInfos || childrenInfos.length <= 0) return { width: 1, height: 1 };

        let currentRow = 1;
        const rows = [];

        Object.values(childrenInfos).forEach(childInfos => {
            if (!childInfos) return;

            const row = childInfos.row === 'auto' ? currentRow : childInfos.row;
            // if (childInfos.row === 'auto') currentRow++;

            if (childInfos.fullwidth) currentRow += childInfos.height;

            if (!rows[row]) rows[row] = {width: 0, height: 0}; // create row on first entry of each row

            const colSize = NumberOrOne(childInfos.col) + childInfos.width - 1; // Because col n with width 1 should return a col of n instead of n + 1

            // console.log(childInfos.type, colSize);
            const width = (childInfos.col === 'auto') ? rows[row].width + colSize : Math.max(rows[row].width, colSize);
            const height = Math.max(rows[row].height, childInfos.height);

            rows[row] = {width, height};
        });

        let maxCol = 1;
        let maxRow = 1;
        rows.forEach((row, index) => {
            if (!row || !row.width || !row.height) return null;
            maxCol = Math.max(maxCol, row.width);
            maxRow = Math.max(maxRow, NumberOrOne(index) + row.height - 1);
        });

	    maxCol = getTemplateLength(columnsTemplate) || maxRow;
        maxRow = getTemplateLength(rowsTemplate) || maxRow;

        return { width: maxCol, height: maxRow };
    }


	findNextEmptyCoordinates(grid) {
		return { width: 1, height: 1 };
	}


	getVirtualGrid() {
        // let currentRow = 0;
        // const rows = [];

        // const childrenInfos  = getGridElements(store, { grid: id });
        // childrenInfos.forEach(childInfos => {
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
    //
    //     const childrenInfos  = getGridElements(store, { grid: id });
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
    //         return React.cloneElement(child, { ...child.props, idgrid: this.state.id });
    //     });
    //     return editedChildren;
    // }


    injectUuid () {
        const { children } = this.props;
        const { id } = this.state;
        return React.Children.map(children, child => {
            return React.cloneElement(child, { ...child.props, idgrid: id });
        });
    }


    // to perform
    getStyle() {
        const { store } = this.context;
        const { style, columnsTemplate, rowsTemplate, gap = '', rowGap = gap, colGap = gap } = this.props;

        const dimensions = getGridDimensions(store, { grid: this.state.id });

        if (dimensions.width === undefined && !columnsTemplate ||
            dimensions.height === undefined && !rowsTemplate) {
            return style;
        }

        // this.getVirtualGrid();
        this.gridDimensions = dimensions;

        const gridTemplateRows = generateTemplate({ template: rowsTemplate, dimension: dimensions.height});
        const gridTemplateColumns = generateTemplate({ template: columnsTemplate, dimension: dimensions.width});

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

export { Element, Row, UngridifiedElement } from './GridElement';
