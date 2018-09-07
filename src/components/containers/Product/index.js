import React, { Component } from 'react';
import {Grid, GridElement} from '../Grid/index';

import './index.styl';

export class Product extends Component {
    renderChildren (children, reverted = false) {
        if (!Array.isArray(children)) children = [children];
        return React.Children.map(children, (child, index) => {
            return React.createElement(GridElement, { ...child.props, key: `GE${child.type.name}#${index}`, children: React.cloneElement(child, { key: `${child.type.name}#${index}`, reverted }) });
        });
    }
    render () {
        const { className, children, reverted } = this.props;
        return React.createElement(Grid , { ...this.props, className: `product ${className || ''}`, children: this.renderChildren(children, reverted) });
    }
}

export * from './ProductItem';