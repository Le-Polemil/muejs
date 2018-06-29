import React, { Component } from 'react';
import './index.styl';

import Grid from '../Grid';

export default class Body extends Component {
    constructor(props) {
        super(props);

        this.className = props.className || '';
        this.style = props.style;

        this.children = props.children;
        if (this.children && !Array.isArray(this.children)) this.children = [this.children];
    }

    renderChildren () {
        if (!this.children) return null;
        return this.children.map((element, index) => {
            return element;
        });
    };
    render () {
        const className = 'body' + (this.className ? ' ' + this.className : '');
        return (
            <Grid className={className} style={this.style}>
                { this.renderChildren() }
            </Grid>
        );
    }
};

export * from '../BodyItem';