import React from 'react';
import Grid, { GridElement } from '../Grid';

import './index.styl';

export default class Card extends Grid {
    getClassName() {
        return `card${this.className && ' ' + this.className}`;
    }
    renderChildren () {
        return this.children.map((element, index) => {
            return <GridElement key={index + 1} row={index + 1}>{ element }</GridElement>;
        });
    }
}

export * from './CardItem';