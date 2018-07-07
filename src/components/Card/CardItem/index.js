import React from 'react';
import Grid, { GridElement } from '../Grid';

export class Card extends Grid {
    getClassName() {
        return `footer-list${this.className && ' ' + this.className}`;
    }
    renderChildren () {
        return this.children.map((element, index) => {
            return <GridElement key={index + 1} className='list' row={index + 1}>{ element }</GridElement>;
        });
    }
}