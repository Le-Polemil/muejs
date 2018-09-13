import React, { Component } from 'react';
import { Grid, GridElement } from '../Grid/index';

import './index.styl';

export class Card extends Component {
    static renderChildren (chldn) {
        const children = Array.isArray(chldn) ? chldn : [chldn];

        return React.Children.map(children, (child, index) => {
            return <GridElement { ...child.props } key={index} row={index + 1}>{ child }</GridElement>;
        })
    }
    render() {
        const { className, children, rowsTemplate, propsTemplate } = this.props;
        return <Grid { ...this.props } className={`card ${className || ''}`} columnsTemplate={propsTemplate || "1fr"} rowsTemplate={rowsTemplate || "auto 1fr auto"}>{ Card.renderChildren(children) }</Grid>;
    }
}

export * from './CardItem';