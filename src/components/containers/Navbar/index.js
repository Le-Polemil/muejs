import React, { Component } from 'react';
import './index.styl';
import { NavIcon } from './NavItem';
import { Grid, GridElement } from '../Grid';

export class Navbar extends Component {
    constructor(props) {
        super(props);

        this.children = Array.isArray(props.children) ? props.children : [props.children];

        this.columnsTemplate = this.generateColumnsTemplate();

        this.justifyCollapseIcon = props.justifyCollapseIcon || 'right';
        this.collapseIcon = props.collapseIcon || 'menu';
    }

    calculateColumnsRepartition () {
        if (!this.children) return null;

        const { children } = this;
        const columns = { start:[], left: [], center: [], right: [], end:[] };

        React.Children.map(children, child => {
            columns[child.props.justify || 'left'].push(child);
        });

        this.columns = [ ...columns.start, ...columns.left, null, ...columns.center, null, ...columns.right, ...columns.end ] || this.columns;
        return this.columns;
    }

    generateColumnsTemplate () {
        const template = { start: '', left: '', center: '', right: '', end:'' };

        this.calculateColumnsRepartition().map((col) => {
            if (col) template[col.props.justify || 'left'] += 'max-content ';
        });
        return template.start + template.left + '1fr ' + template.center + '1fr ' + template.right + template.end;
    }

    getCollapseIcon () {
        return <NavIcon className='collapse-icon' col={this.columns.length || 0} large icon={this.collapseIcon} />;
    }

    renderChildren () {
        const { children, props, columns, getCollapseIcon } = this;
        //children.push(getCollapseIcon());

        return React.Children.map(children, (child, index) => {
            const col = columns.findIndex(element => element === child) + 1 || child.props && child.props.col;
            return <GridElement key={index} row={1} col={col}>{ child }</GridElement>;
        });
    };

    render () {
        const { columnsTemplate, props } = this;
        return <Grid columnsTemplate={columnsTemplate} rowsTemplate={"1fr"} { ...props } className={`navbar ${props.className || ''}`}>{ this.renderChildren() }</Grid>;
    }
};

export * from './NavItem';