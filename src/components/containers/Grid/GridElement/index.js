import React, { Component } from 'react';

export class GridElement extends Component {
    constructor (props) {
        super(props);
        this.children = Array.isArray(props.children) ? props.children : [props.children];

        this.state = {
            col: props.col || 'auto',
            row: props.row || 'auto',
            width: props.width || 1,
            height: props.height || 1,
            fullWidth: props.fullWidth,
            fullHeight: props.fullHeight,
        };
        this.getStyle = this.getStyle.bind(this);
    }

    getStyle () {
        const { col, row, width, height } = this.state;
        return {
            gridColumn: `${col} / span ${width}`,
            gridRow: `${row} / span ${height}`,
            ...this.props.style
        };
    }
    render() {
        const { props, getStyle, children } = this;
        return <div className={props.className} style={ getStyle() }>{ children }</div>;
    }
}

export const Row = (props) => {
    return <GridElement { ...props } className={props.className} fullWidth>{ props.children }</GridElement>;
};
// Doesn't work very well
export const Col = (props) => {
    return <GridElement { ...props } className={props.className} fullHeight>{ props.children }</GridElement>;
};