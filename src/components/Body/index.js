import React, { Component } from 'react';
import './index.styl';

import { Grid, GridElement } from '../Grid';

export class Body extends Component {
    render() {
        const { children, className } = this.props;
        return React.createElement(Grid, { ...this.props, className: `body ${className || ''}`, children });
    }
};

export class BodyElement extends Component {
    render() {
        const { children, className } = this.props;
        return React.createElement(GridElement, { ...this.props, className: `body-element ${className || ''}`, children });
    }
};