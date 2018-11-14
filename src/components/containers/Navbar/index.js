import React, { Component } from 'react';
import { Grid, GridElement } from '../Grid';
import './index.styl';

export class Navbar extends Component {
    generateColumnsTemplate (children) {
        if (!children) return;

        const columns = { start:[], left: [], center: [], right: [], end:[] };
        React.Children.map(children, child => {
            columns[child.props.justify || 'left'].push(child);
        });
        this.columns = [ ...columns.start, ...columns.left, null, ...columns.center, null, ...columns.right, ...columns.end ] || this.columns;

        const template = { start: '', left: '', center: '', right: '', end:'' };
        this.columns.map((col) => {
            if (col) template[col.props.justify || 'left'] += 'auto ';
        });
        return template.start + template.left + '1fr ' + template.center + '1fr ' + template.right + template.end;
    }

    renderChildren () {
        const { props, columns } = this;

        return React.Children.map(props.children, (child, index) => {
            const col = columns.findIndex(element => element === child) + 1 || child.props && child.props.col;
            return <GridElement key={index} row={1} col={col}>{ child }</GridElement>;
        });
    };

    render () {
        const { children, className, style, ...otherProps } = this.props;
        return <Grid columnsTemplate={this.generateColumnsTemplate(children)} rowsTemplate={"1fr"} { ...otherProps } className={`navbar ${className || ''}`}>{ this.renderChildren() }</Grid>;
    }
};

export * from './NavItem';