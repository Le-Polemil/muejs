import React, { Component } from 'react';

export default class GridElement extends Component {
    constructor (props) {
        super(props);

        this.state = {
            col: props.col || 1,
            row: props.row || 1,
            children: props.children,
        };
    }

    render() {
        return (
            <div className="grid-element" style={{ gridColumn: this.state.col, gridRow: this.state.row }}>
                { this.state.children }
            </div>
        );
    }
}
