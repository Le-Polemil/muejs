import React, { Component } from 'react';

export class GridElement extends Component {
    constructor (props) {
        super(props);

        this.style = props.style;
        this.className = props.className || '';

        this.children = props.children;
        if (!Array.isArray(this.children)) this.children = [this.children];

        this.maxWidthPossible = props.maxWidth;
        this.maxHeightPossible = props.maxHeight;

        this.state = {
            col: props.col || 'auto',
            row: props.row || 'auto',
            width: props.width || 1,
            height: props.height || 1,
            isFullWidth: props.fullWidth,
            isFullHeight: props.fullHeight,
        };
    }

    checkIfFullWidth() {
        if (this.state.isFullWidth || this.state.width === 'max') {
            this.state.width = this.maxWidthPossible;
        }
    }

    checkIfFullHeight() {
        if (this.state.isFullHeight || this.state.height === 'max') {
            this.state.height = this.maxHeightPossible;
        }
    }

    getStyle () {
        this.checkIfFullWidth();
        this.checkIfFullHeight();

        const style = {
            gridColumn: this.state.col + (this.state.width > 1 ? ' / span ' + this.state.width : ''),
            gridRow: this.state.row + (this.state.height > 1 ? ' / span ' + this.state.height : ''),
        };

        return { ...style, ...this.style };
    }

    getClassName () {
        return `grid-element${this.className && ' ' + this.className}`;
    }

    render() {
        return <div className={this.getClassName()} style={this.getStyle()}>{ this.children }</div>;
    }
}

export class Row extends GridElement {
    constructor (props) {
        super(props);

        this.state.row = props.pos || props.row || this.state.row;
        this.state.isFullWidth = true;
    }
    getClassName() {
        return `grid-row${this.className && ' ' + this.className}`;
    }
}

export class Col extends GridElement {
    constructor (props) {
        super(props);

        this.state.col = props.pos || props.col || this.state.col;
        this.state.isFullHeight = true;
    }
    getClassName() {
        return `grid-col${this.className && ' ' + this.className}`;
    }
}