import React, { Component } from 'react';
import './index.styl';

export class Grid extends Component {
    constructor (props) {
        super(props);

        this.className = props.className || '';
        this.style = props.style;

        this.children = props.children;
        if (!Array.isArray(this.children)) this.children = [this.children];

        this.forceTemplate = props.forceTemplate;
        this.propsColumnsTemplate = props.columnsTemplate;
        this.propsRowsTemplate = props.rowsTemplate;

    }

    static returnNumberOrOne(number) {
        return Number.isInteger(number) ? number : 1;
    }

    calculateOfColumnsAndRows() {
        if (!this.children) return { maxCol: 0, maxRow: 0 };
        const rows = [];
        this.children.forEach((child) => {
            const details = {
                col: child.props.col || 'auto',
                row: child.props.row || 'auto',
                width: child.props.width || 'auto',
                height: child.props.height || 'auto',
            };
            if (!rows[details.row]) rows[details.row] = { width: 0, height: 0 }; // create row on first entry of this row

            const colSize = Grid.returnNumberOrOne(details.col) + Grid.returnNumberOrOne(details.width) - 1; // Because col n + width 1 = n +1 instead of n

            const width = details.col === 'auto' ? (rows[details.row].width) + colSize :  Math.max(rows[details.row].width, colSize);
            const height = details.row === 'auto' ? (rows[details.row].height) + Grid.returnNumberOrOne(details.height) :  Math.max(rows[details.row].height, Grid.returnNumberOrOne(details.height));

            rows[details.row] = { width, height };
        });
        let maxCol = 0;
        let maxRow = 0;

        rows.forEach((row, index) => {
            maxCol = Math.max(maxCol, row.width);
            maxRow = Math.max(maxRow, Grid.returnNumberOrOne(index) + row.height - 1);
        });

        return { maxCol, maxRow };
    }

    keepUpToDateChildren() {
        const { maxCol, maxRow } = this.calculateOfColumnsAndRows();
        this.maxWidth = maxCol;
        this.maxHeight = maxRow;
    }

    getClassName() {
        return `grid${this.className ? ' ' + this.className : ''}`;
    }
    getStyle() {
        const style = {
            gridTemplateColumns: this.forceTemplate && this.propsColumnsTemplate || 'auto-fit',
            gridTemplateRows: this.forceTemplate && this.propsRowsTemplate || 'auto-fit',
        };
        return { ...style, ...this.style };
    }

    renderChildren() {
        if (!this.children) return null;
        return this.children.map((element) => {
            // because element.props is not flexible
            element = { ...element, props: { ...element.props, maxwidth: this.maxWidth, maxheight: this.maxHeight } };
            return element;
        });
    }
    render() {
        this.keepUpToDateChildren();
        return <div className={this.getClassName()} style={this.getStyle()}>{ this.renderChildren() }</div>;
    }
}

export * from './GridElement';
