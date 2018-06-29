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

        this.forceTemplate = props.forceTemplate;

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
            // if (element.props.width === 'max' || element.props.fullWidth) element.props.width = this.
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

export * from '../GridElement/index.jsx';
