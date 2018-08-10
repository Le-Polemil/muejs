import React, { Component } from 'react';
import './index.styl';
import { NavIcon } from './NavItem';
import { Grid, GridElement } from '../Grid';

export class Navbar extends Component {
    constructor(props) {
        super(props);

        this.columnsTemplate = this.generateColumnsTemplate();
        this.rowsTemplate = '1fr';

        this.justifyCollapseIcon = props.justifyCollapseIcon || 'right';
        this.collapseIcon = props.collapseIcon || 'menu';

        this.columns = {};
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

    getCollapseIcon () {
        return <NavIcon className='collapse-icon' col={this.columns.length || 0} large icon={this.collapseIcon} />;
    }

    renderChildren () {
        const { props, getCollapseIcon } = this;
        const children = Array.isArray(props.children) ? props.children : [props.children];
        children.push(getCollapseIcon());

        return React.Children.map(children, (child, index) => {
            const col = this.columns.findIndex(element => element === child) + 1 || child.props && child.props.col;
            return <GridElement key={index} row={1} col={col}>{ child }</GridElement>;
        });
    };

    render () {
        const { columnsTemplate, rowsTemplate } = this;
        return React.createElement(<Grid />, { ...props, className: `navbar ${this.className || ''}`, columnsTemplate, rowsTemplate, children: this.renderChildren() });
    }
};

export * from './NavItem';