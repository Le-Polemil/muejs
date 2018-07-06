import React, { Component } from 'react';
import './index.styl';

import Grid from '../Grid';


export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.className = props.className || '';
        this.style = props.style;

        this.children = props.children;

        this.fullWidth = props.fullWidth;
        this.fullHeight = props.fullHeight;

        this.forceTemplate = props.forceTemplate;

        this.columnsTemplate = props.columnsTemplate;
        this.rowsTemplate = props.rowsTemplate;
    }

    render () {
        const className = 'footer' + (this.className ? ' ' + this.className : '');
        console.log('footer:');
        return (
            <Grid forceTemplate={this.forceTemplate}
                  columnsTemplate={this.columnsTemplate}
                  rowsTemplate={this.rowsTemplate}
                  className={className} style={this.style}
            >
                { this.children }
            </Grid>
        );
    }
};

export * from '../FooterItem';