import React, { Component } from 'react';
import './index.styl';

import { Grid, GridElement } from '../Grid';

export class Body extends Component {
    render() {
        const { children, className } = this.props;
        return <Grid { ...this.props } className={`body ${className || ''}`}>{ children }</Grid>;
    }
};

export class BodyElement extends Component {
    render() {
        const { children, className } = this.props;
        return <GridElement { ...this.props } className={`body-element ${className ? className : ''}`}>{ children }</GridElement>;
    }
};