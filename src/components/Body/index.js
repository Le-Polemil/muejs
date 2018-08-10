import React, { Component } from 'react';
import './index.styl';

import { Grid, GridElement } from '../Grid';

export class Body extends Component {
    render() {
        const { props } = this;
        const { children, className } = props;
        return React.createElement(Grid, { ...props, className: `body ${className || ''}`, children });
    }
};

export class BodyElement extends Component {
    render() {
        const { props } = this;
        const { children, className } = props;
        return React.createElement(GridElement, { ...props, className: `body-element ${className || ''}`, children });
    }
};