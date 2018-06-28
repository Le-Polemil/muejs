import React, { Component } from 'react';
import './index.styl';

import Grid, { GridElement } from '../Grid/index.jsx';


export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.className = props.className || '';
        this.style = props.style;

        this.children = props.children;
        if (this.children && !Array.isArray(this.children)) this.children = [this.children];
    }

    calculateColumnsRepartition () {
        const columns = { start:[], left: [], center: [], right: [], end:[] };
        this.children.map((child) => {
            columns[child.props.justify || 'left'].push(child);
        });
        this.columns = [ ...columns.start, ...columns.left, null, ...columns.center, null, ...columns.right, ...columns.end ] || this.columns;
        return this.columns;
    }

    generateNavColumnsTemplate () {
        if (!this.children) return null;
        const template = { start: '', left: '', center: '', right: '', end:'' };
        this.columns.map((col) => {
            if (col) {
                template[col.props.justify || 'left'] += 'max-content ';
            }
        });
        return template.start + template.left + '1fr ' + template.center + '1fr ' + template.right + template.end;
    }

    renderChildren () {
        if (!this.children) return null;
        return this.children.map((element, index) => {
            return (
                <GridElement key={index} row={1} col={this.columns.findIndex(function (col) { return col === element }) + 1}>
                    { element }
                </GridElement>
            );
        });
    };
    render () {
        this.calculateColumnsRepartition();

        const className = 'navbar' + (this.className ? ' ' + this.className : '');
        return (
            <Grid className={className} style={this.style} forceTemplate columnsTemplate={this.generateNavColumnsTemplate()} rowsTemplate='1fr'>
                { this.renderChildren() }
            </Grid>
        );
    }
};

export * from '../NavItem/index.jsx';