import React, { Component } from 'react';

export default class GridElement extends Component {
    constructor (props) {
        super(props);

        this.style = props.style;
        this.className = props.className || '';

        this.state = {
            col: props.col || 1,
            row: props.row || 1,
            width: props.width || 1,
            height: props.height || 1,
            children: props.children,
        };
    }

    render() {
        let style = {
            gridColumn: this.state.col + (this.state.width > 1 ? ' / span ' + this.state.width : ''),
            gridRow: this.state.row + (this.state.height > 1 ? ' / span ' + this.state.height : ''),
        };
        style = { ...style, ...this.style };

        const className = 'grid-element' + (this.className ? ' ' + this.className : '');
        return (
            <div className={className} style={ style }>
                { this.state.children }
            </div>
        );
    }
}
