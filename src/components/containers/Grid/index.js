import React, { Component } from 'react';

import './index.styl';

import { NumberOrOne } from '../../../static/Math';

export class Grid extends Component {
    constructor (props) {
        super(props);

        this.children = props.children;

        this.columnsTemplate = props.columnsTemplate;
        this.rowsTemplate = props.rowsTemplate;

        this.getStyle = this.getStyle.bind(this);

        const { editedChildren, gridDimensions } = this.constructGrid(this.children);
        this.children = editedChildren || this.children;
        this.gridDimensions = gridDimensions;
    }

    calculateGridSize(children) {
        try {
            const rows = [];
            React.Children.forEach(children, child => {
                const details = {
                    col: child.props.col,
                    row: child.props.row,
                    width: child.props.width || 1,
                    height: child.props.height || 1,
                };

                const isAuto = (!details.col || !details.row);
                if (isAuto) {
                    details.col = 'auto';
                }

                if (!rows[details.row]) rows[details.row] = {width: 0, height: 0}; // create row on first entry of each row

                const colSize = NumberOrOne(details.col) + details.width - 1; // Because col n with width 1 should return a col of n instead of n + 1

                const width = details.col === 'auto' ?
                    (rows[details.row].width) + colSize :
                    Math.max(rows[details.row].width, colSize);
                const height = Math.max(rows[details.row].height, details.height);

                rows[details.row] = {width, height};
            });
            // console.log(rows);

            let maxCol = 1;
            let maxRow = 1;
            rows.forEach((row, index) => {
                if (!row || !row.width || !row.height) return null;
                maxCol = Math.max(maxCol, row.width);
                maxRow = Math.max(maxRow, NumberOrOne(index) + row.height - 1);
            });
            return { x: maxCol, y: maxRow, rows };
        }
        catch (e) {
            console.log(e);
            return { x: 1, y: 1, rows: [[]] };
        }
    }

    constructGrid (children) {
        const { rows, ...gridDimensions } = this.calculateGridSize(children);
        if (!children) return { editedChildren: null, gridDimensions };

        console.log('Should return', gridDimensions.y, 'arrays of', gridDimensions.x, 'element(s)');
        const grid = Array(gridDimensions.y).fill(Array(gridDimensions.x).fill(0));
        console.log('Got', grid);

        let currentRow = 1;
        let currentCol = 1;

        // console.log('rowsAuto=',rows['auto']);

        const childrenInfos = [];
        const editedChildren = React.Children.map(children, child => {
            let { row, col, height, width, fullHeight, fullWidth } = child.props;

            const childInfos = {
                col: col || currentCol,
                width: fullWidth ? gridDimensions.x : (width || currentCol),
                row: row || currentRow,
                height: fullHeight ? gridDimensions.y : height,
                fullWidth,
                fullHeight,
            };
            childrenInfos.push(childInfos);

            // grid[0] = the 1st row of the grid, grid[1][6] the 7th column of the second row, ....
            for (let y = childInfos.row -1; y <  childInfos.row + childInfos.height - 1; y++) {
                for (let x = childInfos.cStart -1; x <  childInfos.col + childInfos.width - 1; x++) {
                    // console.log('', grid[y][x], `elements already placed in [${y}][${x}]`);
                    grid[y][x] = grid[y][x]++ || 1;
                }
            }

            return React.cloneElement(child, { ...child.props, ...childInfos } );
        });
        // console.log('final', grid);
        return { editedChildren, gridDimensions };
    }

    // to perform
    getStyle() {
        const { gridDimensions, columnsTemplate, rowsTemplate, props } = this;
        return {
            gridTemplateColumns: columnsTemplate || (gridDimensions.x ? 'auto '.repeat(gridDimensions.x) : 'fit-content(100%)'),
            gridTemplateRows: rowsTemplate || (gridDimensions.y ? 'auto '.repeat(gridDimensions.y) : 'fit-content(100%)'),
            ...props.style
        };
    }

    render() {
        const { props, getStyle, children } = this;
        return <div className={`grid ${props.className || ''}`} style={ getStyle() }>{ children }</div>;
    }
}

export * from './GridElement';
