import React from 'react';
import Grid, { GridElement } from '../Grid';

import './index.styl';

export default class Card extends Grid {
    constructor (props) {
        super(props);

        this.forceTemplate = true;
        this.propsColumnsTemplate = '1fr';
        this.propsRowsTemplate = '65% 26% 9%';
    }
    getClassName() {
        return `card${this.className ? ' ' + this.className : ''}`;
    }
    renderChildren () {
        return this.children.map((element, index) => {
            return <GridElement style={ element.type.name === 'CardImage' ? { overflow:'hidden' } : null } key={index + 1} row={index + 1}>{ element }</GridElement>;
        });
    }
}

export * from './CardItem';