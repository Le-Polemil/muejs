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

        const col = props.col || this.children.length;
        const row = props.row || 1;

        this.state = {
            adaptToContent: props.adaptToContent ? '1fr ' : null,
            adaptToMinContent: props.adaptToMinContent ? 'min-content ' : null,
            adaptToMaxContent: props.adaptToMaxContent ? 'max-content ' : null,
            adaptToAuto: props.adaptToAuto ? 'auto ' : null,
            adaptToMinMax: props.adaptToMinMax ? 'minmax(min-content, ' + props.adaptToMinMax + ') ' : null,
            col,
            row,
        };

        this.allowedToAdapt = props.adaptToContent || props.adaptToMinContent || props.adaptToMaxContent || props.adaptToAuto || props.adaptToMinMax;

        if (this.allowedToAdapt) {
            this.state = { ...this.state, col: this.adaptNumberOfColumns(), row: this.adaptNumberOfRows() }
        }
    }

    adaptNumberOfColumns() {
        if (!this.children) return 0;
        const columns = this.children.map((child) => {
            if (!child.props.col) {
                console.log(child);
                return console.error(new Error('Should adapt to children but no col props was defined on : ' + child));
            }
            return { pos: child.props.col, width: child.props.width || 1 };
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
    adaptNumberOfRows() {
        if (!this.children) return 0;
        const rows = this.children.map((child) => {
            if (!child.props.col)
                return console.error(new Error('Should adapt to children but no row props was defined on ' + child));
            return { pos: child.props.row, height: child.props.height || 1 };
        });
        let maxRow = 0;
        rows.forEach((row) => {
            if (row) {
                const size = row.pos + row.height - 1;
                maxRow = Math.max(maxRow, size);
            }
        });
        // this.setState({ row: maxRow });
        return maxRow;
    }

    generateTemplateFrom(quantity) {
        if (!quantity) return '';
        let template = '';
        for (let i = 0; i < quantity; i++) {
            template +=
                this.state.adaptToContent ||
                this.state.adaptToMinContent ||
                this.state.adaptToMaxContent ||
                this.state.adaptToAuto ||
                this.state.adaptToMinMax ||
                '1fr '
            ;
        }
        return template;
    }

    calculateChildrenProps() {
        if (!this.children) return null;
        this.children = this.children.map((element) => {
            return { ...element, props: element.props };
        });
    }

    // If need to recalculate
    recalculateElementAndChildrenProps () {
        this.calculateChildrenProps();
        this.setState((previousState) => {
            return {
                col: this.adaptNumberOfColumns() || previousState.col,
                row: this.adaptNumberOfRows() || previousState.row,
            };
        });
    }

    renderChildren() {
        if (!this.children) return null;
        return this.children.map((element) => {
            return element;
        });
    }
    render() {

        let style = {
            gridTemplateColumns:
                (!this.allowedToAdapt && this.propsColumnsTemplate) ? this.propsColumnsTemplate : this.generateTemplateFrom(this.state.col),
            gridTemplateRows:
                (!this.allowedToAdapt && this.propsRowsTemplate) ? this.propsRowsTemplate : this.generateTemplateFrom(this.state.row),
        };

        const className = 'grid ' + this.className;
        // console.log('style', this.generateTemplateFrom(this.state.col));
        return (
            <div className={className} style={{ ...style, ...this.style }}>
                { this.renderChildren() }
            </div>
        );
    }
}
