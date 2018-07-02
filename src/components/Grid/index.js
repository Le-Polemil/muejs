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

        this.maxWidth = this.calculateNumberOfColumns();
        this.maxHeight = this.calculateNumberOfRows();

        this.forceTemplate = props.forceTemplate;

    }

    calculateNumberOfColumns() {
        if (!this.children) return 0;
        const columns = this.children.map((child) => {
            return { pos: (child.props.col !== 'auto' ? child.props.col : 1) || 1, width: child.props.width || 1 };
        });
        let maxCol = 0;
        columns.forEach((col) => {
            if (col) {
                const size = col.pos + col.width - 1;
                maxCol = Math.max(maxCol, size);
            }
        });
        return maxCol;
    }
    calculateNumberOfRows() {
        if (!this.children) return 0;
        const rows = this.children.map((child) => {
            return { pos: (child.props.row !== 'auto' ? child.props.row : 1) || 1, height: child.props.height || 1 };
        });
        let maxRow = 0;
        rows.forEach((row) => {
            if (row) {
                const size = row.pos + row.height - 1;
                maxRow = Math.max(maxRow, size);
            }
        });
        return maxRow;
    }

    calculateChildrenProps() {
        if (!this.children) return null;
        this.children = this.children.map((element) => {
            return { ...element, props: element.props };
        });
    }

    renderChildren() {
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
