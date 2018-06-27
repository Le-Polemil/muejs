import React, { Component } from 'react';

import GridElement from "./GridElement/index.jsx";
import './index.styl';

export default class Grid extends Component {
    constructor (props) {
        super(props);

        this.children = props.children;

        this.state = {
            adaptToContent: props.adaptToContent,
            col: props.col,
            row: props.row,
            columnsTemplate: props.columnsTemplate || this.simpleTemplateFrom(100, props.col),
            rowsTemplate: props.rowsTemplate || this.simpleTemplateFrom(100, props.row),
        };
    }

    simpleTemplateFrom(toDivide, divisor) {
        let template = '';
        for (let i = 0; i < divisor; i++) {
            const percent = toDivide / divisor;
            template += percent ? percent + '% ' : '1fr '
        }
    }


    getGridElementProps(element, index) {
        const props = {};
        if (element.props.className) {
            const classList = element.props.className.split(' ');
            classList.forEach((classname) => {
                const match = classname.match(/(\w+)-(\d)/);
                if (match) {
                    const key = match[1] || null;
                    props[key] = match[2] || 0;
                }
            });
        }
        // Default values if not found
        props['col'] = props['col'] || index + 1;
        props['row'] = props['row'] || 1;

        return props;
    }

    calculateTemplateColumns() {
        let divisor = 0;
        const columns = this.children.map((child) => {
            const colPos = child.gridProps.col || 1;
            const gridWidth = child.gridProps.gridWidth || 1;
            divisor += Number(gridWidth) || 1;
            return { colPos, gridWidth };
        });
        let template = '';
        columns.map(col => {
            const percent = (100 / divisor * col.gridWidth);
            template += percent ? percent + '% ' : '1fr ';
        });

        return template;
    }

    calculateTemplateRows() {
        let divisor = 0;
        const rows = this.children.map((child) => {
            const rowPos = child.gridProps.row || 1;
            const gridHeight = child.gridProps.gridHeight || 1;
            divisor += Number(gridHeight) || 1;
            return { rowPos, gridHeight };
        });
        let template = '';
        rows.map(row => {
            const percent = (100 / divisor * row.gridWidth);
            template += percent ? percent + '% ' : '1fr ';
        });

        return template;
    }

    calculateChildrenProps() {
        if (!this.children) return null;

        this.children = this.children.map((element, index) => {
            return { jsx: element, gridProps: this.getGridElementProps(element, index) };
        });
    }

    renderChildren() {
        return this.children ? this.children.map((element, index) => {
            return (
                <GridElement key={index} {...element.gridProps}>
                    { element.jsx }
                </GridElement>
            );
        }) : null;
    }
    render() {
        this.calculateChildrenProps();

        const style = {
            gridTemplateColumns: this.state.adaptToContent && this.children ? this.calculateTemplateColumns() : this.state.columnsTemplate,
            gridTemplateRows: this.state.adaptToContent && this.children ? this.calculateTemplateRows() : this.state.rowsTemplate,
        };
        return (
            <div className="grid" style={ style }>
                { this.renderChildren() }
            </div>
        );
    }
}
