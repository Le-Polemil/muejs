import React, { Component } from 'react';

import './index.styl';

export default class Grid extends Component {
    constructor (props) {
        super(props);

        this.className = props.className || '';
        this.style = props.style;

        this.children = props.children;
        if (this.children && !Array.isArray(this.children)) this.children = [this.children];

        this.propsColumnsTemplate = props.columnsTemplate;
        this.propsRowsTemplate = props.rowsTemplate;

        this.calculateChildrenProps();

        const { maxCol, maxRow } = this.calculateOfColumnsAndRows();
        this.maxWidth = maxCol;
        this.maxHeight = maxRow;

        this.forceTemplate = props.forceTemplate;

    }

    calculateOfColumnsAndRows() {
        if (!this.children) return 0;
        const rows = [];
        this.children.forEach((child) => {
            const details = {
                col: child.props.col || 1,
                width: child.props.width || 1,
                row: child.props.row || 1,
                height: child.props.height || 1,
            };
            if (!rows[details.row]) rows[details.row] = {};
            const colSize = details.col + details.width - 1;
            const width =  details.col === 'auto' ? (rows[details.row].width || 1) + colSize :  Math.max(rows[details.row].width || 1, colSize);
            const height =  details.row === 'auto' ? (rows[details.row].height || 1) + details.height :  Math.max(rows[details.row].height || 1, details.height);
            rows[details.row] = { width, height }
        });
        let maxCol = 0;
        let maxRow = 0;
        rows.forEach((row, index) => {
            console.log('row:', row);
            maxCol = Math.max(maxCol, row.width);
            maxRow = Math.max(maxRow, index + row.height - 1);
        });
        console.log('rows', rows.length, "maxCol:", maxCol, "maxRow:", maxRow);
        return { maxCol, maxRow };
    }

    calculateChildrenProps() {
        if (!this.children) return null;
        this.children = this.children.map((element) => {
            return { ...element, props: element.props };
        });
    }

    renderChildren() {
        const { maxCol, maxRow } = this.calculateOfColumnsAndRows();
        this.maxWidth = maxCol;
        this.maxHeight = maxRow;

        if (!this.children) return null;
        return this.children.map((element) => {
            element.props = { ...element.props, maxWidth: this.maxWidth, maxHeight: this.maxHeight };
            return element;
        });
    }

    render() {
        let style = {
            gridTemplateColumns: (this.forceTemplate && this.propsColumnsTemplate) ? this.propsColumnsTemplate : 'auto-fit',
            gridTemplateRows: (this.forceTemplate && this.propsRowsTemplate) ? this.propsRowsTemplate : 'auto-fit',
        };

        const className = 'grid' + (this.className ? ' ' + this.className : '');
        return (
            <div className={className} style={{ ...style, ...this.style }}>
                { this.renderChildren() }
            </div>
        );
    }
}

export * from '../GridElement';
