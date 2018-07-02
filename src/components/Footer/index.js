import React, { Component } from 'react';
import './index.styl';

import Grid, { GridElement } from '../Grid';


export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.className = props.className || '';
        this.style = props.style;

        this.children = props.children;

        this.fullWidth = props.fullWidth;
        this.fullHeight = props.fullHeight;
    }

    render () {
        const className = 'footer' + (this.className ? ' ' + this.className : '');
        return (
            <Grid className={className} style={this.style}>
                { this.children }
            </Grid>
        );
    }
};

export * from '../FooterItem';