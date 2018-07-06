import React from 'react';
import Grid, { GridElement } from '../Grid';

export class FooterList extends GridElement {
    renderChildren () {
        if (!this.children) return null;
        if (!Array.isArray(this.children)) this.children = [this.children];

        return this.children.map((element, index) => {
            return (
                <GridElement key={index + 1}
                             className='footer-list-element'
                             row={index + 1}
                >
                    {element}
                </GridElement>
            );
        });
    }
    render () {
        return <Grid className={'footer-list ' + this.getClassName()} style={this.getStyle()}>{this.renderChildren()}</Grid>
    }
};


export class FooterLine extends GridElement {
    renderChildren () {
        if (!this.children) return null;
        if (!Array.isArray(this.children)) this.children = [this.children];

        return this.children.map((element, index) => {

            console.log('maxWidthPossible:', this.maxWidthPossible);
            return (
                <GridElement key={index + 1}
                             className='footer-line-element'
                             col={index + 1}
                >
                    {element}
                </GridElement>
            );
        });
    }
    render () {
        return <Grid className={'footer-line ' + this.getClassName()} style={this.getStyle()}>{this.renderChildren()}</Grid>
    }
};