import React, { Component } from 'react';

export default class Row extends Component {
    constructor (props) {
        super(props);

        this.className = props.className || '';
        this.style = props.style;

        this.children = props.children;
        if (this.children && !Array.isArray(this.children)) this.children = [this.children];

    }

    renderChildren() {
        if (!this.children) return null;
        return this.children.map((element) => {
            return element;
        });
    }
    render() {
        return (
            <Grid className={this.className} style={this.style} forceTemplate columnsTemplate='repeat(12, 1fr)'>
                <div className='row'>
                    { this.renderChildren() }
                </div>
            </Grid>
        );
    }
}
