import React, { Component } from 'react';
import { Grid } from '../Grid';

import './index.styl';

export class Product extends Component {
    renderChildren () {
        let { children, reverted } = this.props;
        if (!Array.isArray(children)) children = [children];

        return React.Children.map(children, child => {
            React.cloneElement(child, { reverted: reverted });
            return child;
        });
    }
    render () {
        return React.createElement(<Grid />, { ...this.props, className: `product ${this.props.className || ''}`, children: this.renderChildren() });
    }
}

export * from './ProductItem';