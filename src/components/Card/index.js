import React, { Component } from 'react';
import { Grid, GridElement } from '../Grid';

import './index.styl';

export class Card extends Component {
    renderChildren () {
        const { props } = this;
        const children = Array.isArray(props.children) ? props.children : [props.children];

        return React.Children.map(children, (child, index) => {
            return React.createElement(GridElement, { row: index + 1, children: child });
        })
    }

    render() {
        const { props, renderChildren } = this;
        const columnsTemplate = '1fr';
        const rowsTemplate = '6.5fr 2.6fr 0.9fr';
        return React.createElement(Grid , { ...props, className: `card ${props.className || ''}`, columnsTemplate, rowsTemplate, children: renderChildren() });
    }
}

export * from './CardItem';