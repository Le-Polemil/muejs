import React, { Component } from 'react';

export class GridElement extends Component {
    constructor (props) {
        super(props);
        this.getStyle = this.getStyle.bind(this);
    }

    getStyle () {
        const { col, row, width, height } = this.props;
        return {
            gridColumn: `${col ? col : 'auto'} / span ${width ? width : 1}`,
            gridRow: `${row ? row : 'auto'} / span ${height ? height : 1}`,
            ...this.props.style
        };
    }
    render() {
        const { className, children, ...otherProps } = this.props;
        return <div {...otherProps} className={`grid-element ${className ? className : ''}`} style={ this.getStyle() }>{ children }</div>;
    }
}

export const Row = ({ col, row, width, height, children, className, style }) => {
    return <GridElement col={col} row={row} width={width} height={height} className={className} style={style} fullWidth>{ children }</GridElement>;
};

// Doesn't work very well
export const Col = ({ col, row, width, height, children, className, style }) => {
    return <GridElement col={col} row={row} width={width} height={height} className={className} style={style} fullHeight>{ children }</GridElement>;
};