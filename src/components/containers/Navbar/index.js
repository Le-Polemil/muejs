import React, { Component } from 'react';

import { Grid, GridElement } from '../Grid';
import gridify from '../../../hoc/gridify';

import './index.styl';



class UngridifiedNavbar extends Component {
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
        const { props: { children } = {}, columns } = this;

        return React.Children.map(children, child => {
            const col = columns.findIndex(element => element === child) + 1 || child.props && child.props.col;
            return React.cloneElement(child, { row: 1, col });
        });
    };

    render () {
        const { children, columnsTemplate, rowsTemplate, gap, rowGap, colGap, ...otherProps } = this.props;
        return (
            <Grid {...otherProps} columnsTemplate={columnsTemplate || this.generateColumnsTemplate(children)} rowsTemplate={rowsTemplate || "fit-content(100%)"} gap={gap} rowGap={rowGap} colGap={colGap}>
                { this.renderChildren() }
            </Grid>
        );
    }
};


export const Navbar = gridify(UngridifiedNavbar, { forcedProps: { fullwidth: 'true', selfRowTemplate: 'fit-content(100%)' }, componentName: 'navbar' });

export * from './NavItem';