import React from 'react';
import Grid, { GridElement } from '../../Grid/index';

export class FooterElement extends GridElement {
    getClassName() {
        return `footer-element${this.className && ' ' + this.className}`;
    }
}

export class FooterList extends Grid {
    getClassName() {
        return `footer-list${this.className && ' ' + this.className}`;
    }
    renderChildren () {
        return this.children.map((element, index) => {
            return <FooterElement key={index + 1} className='list-item' row={index + 1}>{ element }</FooterElement>;
        });
    }
}

export class FooterLine extends GridElement {
    constructor (props) {
        super(props);
        this.state.isFullWidth = true;
    }
    getClassName() {
        return `footer-line${this.className && ' ' + this.className}`;
    }
    renderChildren () {
        return this.children.map((element, index) => {
            return <GridElement key={index + 1} className='footer-element line-item' col={index + 1}>{ element }</GridElement>;
        });
    }
    render () {
        return <Grid className={this.getClassName()} style={this.getStyle()}>{ this.renderChildren() }</Grid>
    }
}