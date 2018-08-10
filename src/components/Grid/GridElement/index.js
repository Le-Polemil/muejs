import React, { Component } from 'react';

export class GridElement extends Component {
    constructor (props) {
        super(props);

        this.style = props.style;
        this.className = props.className || '';

        this.children = Array.isArray(props.children) ? props.children : [props.children];

        this.maxwidth = props.maxwidth || props.width || 1;
        this.maxheight = props.maxheight || props.width || 1;

        this.state = {
            col: props.col || 'auto',
            row: props.row || 'auto',
            width: props.width || 1,
            height: props.height || 1,
            fullWidth: props.fullWidth,
            fullHeight: props.fullHeight,
        };

        this.checkIfFullWidth = this.checkIfFullWidth.bind(this);
        this.checkIfFullHeight = this.checkIfFullHeight.bind(this);
        this.getStyle = this.getStyle.bind(this);
    }

    checkIfFullWidth() {
        if (this.state.fullWidth || this.state.width === 'max') {
            this.state.width = this.maxwidth;
        }
    }
    checkIfFullHeight() {
        if (this.state.fullHeight || this.state.height === 'max') {
            this.state.height = this.maxheight;
        }
    }

    getStyle () {
        this.checkIfFullWidth();
        this.checkIfFullHeight();

        return {
            gridColumn: this.state.col + ' / span ' + this.state.width,
            gridRow: this.state.row + ' / span ' + this.state.height,
            ...this.style
        };
    }
    render() {
        const { props, getStyle, children } = this;
        return <div className={`grid-element ${props.className || ''}`} style={ getStyle() }>{ children }</div>;
    }
}

export class Row extends Component {
    constructor (props) {
        super(props);

        this.row = props.row || props.pos;
        this.fullWidth = true;
    }
    render() {
        const { props, row, fullWidth} = this;
        return React.createElement(GridElement, { ...props, className: `grid-row ${props.className || ''}`, row, fullWidth });
    }
}

// Doesn't work very well
export class Col extends Component {
    constructor (props) {
        super(props);

        this.col = props.col || props.pos;
        this.fullHeight = true;
    }
    render() {
        const { props, col, fullHeight} = this;
        return React.createElement(GridElement, { ...props, className: `grid-col ${props.className || ''}`, col, fullHeight });
    }
}