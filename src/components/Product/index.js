import React from 'react';
import Grid, { GridElement } from '../Grid';

import './index.styl';

export default class Product extends Grid {
    constructor(props) {
        super(props);
        this.reverted = props.reverted;
    }
    getClassName() {
        return `product${this.className ? ' ' + this.className : ''}`;
    }
    renderChildren () {
        if (this.reverted) {
            this.children = this.children.map((element) => ({...element, props: {...element.props, reverted: this.reverted}}));
        }
        return this.children;
    }
}

export * from './ProductItem';