import React, { Component } from 'react';
import { Grid, GridElement } from '../Grid/index';

import './index.styl';

export class Card extends Component {
    renderChildren (chldn) {
        const children = Array.isArray(chldn) ? chldn : [chldn];

        return React.Children.map(children, (child, index) => {
            return React.createElement(GridElement, { key: index, row: index + 1, children: child });
        })
    }
    render() {
        const { props: { className, children }, renderChildren } = this;
        const columnsTemplate = '1fr';
        const rowsTemplate = 'auto 1fr auto';
        return React.createElement(Grid , { ...this.props, className: `card ${className || ''}`, columnsTemplate, rowsTemplate, children: renderChildren(children) });
    }
}

export * from './CardItem';