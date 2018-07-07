import React, { Component } from 'react';
import './index.styl';
import { NavIcon } from './NavItem';
import Grid, { GridElement } from '../Grid';


export default class Navbar extends Grid {
    constructor(props) {
        super(props);

        this.forceTemplate = true;
        this.propsColumnsTemplate = this.generateColumnsTemplate();
        this.propsRowsTemplate = '1fr';

        this.justifyCollapseIcon = props.justifyCollapseIcon || 'right';
        this.collapseIcon = props.collapseIcon || 'menu';
    }

    addCollapseIconToChildren () {
        const collaspeIconChild = <NavIcon className='collapse-icon' col={this.columns.length || 0} large icon={this.collapseIcon}>{this.children}</NavIcon>;
        this.children = [...this.children, collaspeIconChild];
    }

    calculateColumnsRepartition () {
        if (!this.children) return null;
        const columns = { start:[], left: [], center: [], right: [], end:[] };
        this.children.map((child) => {
            columns[child.props.justify || 'left'].push(child);
        });
        this.columns = [ ...columns.start, ...columns.left, null, ...columns.center, null, ...columns.right, ...columns.end ] || this.columns;
        return this.columns;
    }

    generateColumnsTemplate () {
        this.calculateColumnsRepartition();

        const template = { start: '', left: '', center: '', right: '', end:'' };
        this.columns.map((col) => {
            if (col) {
                template[col.props.justify || 'left'] += 'max-content ';
            }
        });
        return template.start + template.left + '1fr ' + template.center + '1fr ' + template.right + template.end;
    }

    getClassName() {
        return `navbar${this.className && ' ' + this.className}`;
    }

    renderChildren () {
        this.addCollapseIconToChildren();
        if (!this.children) return null;
        return this.children.map((element, index) => {
            const col = this.columns.findIndex(col => col === element) + 1 || element.props && element.props.col;
            return <GridElement key={index} row={1} col={col}>{ element }</GridElement>;
        });
    };
};

export * from './NavItem';