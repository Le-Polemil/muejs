import React from 'react';
import Grid, { GridElement } from '../Grid';

export default class Card extends Grid {
    getClassName() {
        return `card${this.className && ' ' + this.className}`;
    }
    renderChildren () {
        return this.children.map((element, index) => {
            return <GridElement key={index + 1} className='list' row={index + 1}>{ element }</GridElement>;
        });
    }
}