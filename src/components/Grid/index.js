import React, { Component } from 'react';
import './index.styl';

import { returnNumberOrOne } from '../../static/Math';

export class Grid extends Component {
    constructor (props) {
        super(props);

        this.children = Array.isArray(props.children) ? props.children : [props.children];

        this.columnsTemplate = props.columnsTemplate;
        this.rowsTemplate = props.rowsTemplate;

        this.maxCol = 0;
        this.maxRow = 0;

        this.calculateGridSize = this.calculateGridSize.bind(this);
        this.getStyle = this.getStyle.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
    }

    calculateGridSize() {
        const { children } = this;
        const rows = [];
        children.forEach((child) => {
            if (!child || !child.props) return null;
            const details = {
                col: child.props.col || 'auto',
                row: child.props.row || 'auto',
                width: child.props.width || 'auto',
                height: child.props.height || 'auto',
            };
            if (!rows[details.row]) rows[details.row] = {width: 0, height: 0}; // create row on first entry of each row

            const colSize = returnNumberOrOne(details.col) + returnNumberOrOne(details.width) - 1; // Because col n with width 1 should return a col of n instead of n + 1

            const width = details.col === 'auto' ?
                (rows[details.row].width) + colSize :
                Math.max(rows[details.row].width, colSize);
            const height = details.row === 'auto' ?
                (rows[details.row].height) + returnNumberOrOne(details.height) :
                Math.max(rows[details.row].height, returnNumberOrOne(details.height));

            rows[details.row] = {width, height};
        });

        rows.forEach((row, index) => {
            if (!row || !row.width || !row.height) return null;
            this.maxCol = Math.max(this.maxCol, row.width);
            this.maxRow = Math.max(this.maxRow , returnNumberOrOne(index) + row.height - 1);
        });
    }

    // to perform
    getStyle() {
        const { maxCol, maxRow } = this;
        return {
            gridTemplateColumns: this.columnsTemplate || '1fr'.repeat(maxCol) || 'auto',
            gridTemplateRows: this.rowsTemplate || '1fr'.repeat(maxRow) || 'auto',
            ...this.props.style
        };
    }

    renderChildren() {
        const { children, maxCol, maxRow } = this;
        return React.Children.map(children, child => {
            if (!child) return null;
            return React.cloneElement(child, { maxwidth: maxCol, maxheight: maxRow });
        });
    }

    render() {
        this.calculateGridSize();
        const { props, getStyle, renderChildren } = this;
        return <div className={`grid ${props.className || ''}`} style={ getStyle() }>{ renderChildren() }</div>;
    }
}

export * from './GridElement';
