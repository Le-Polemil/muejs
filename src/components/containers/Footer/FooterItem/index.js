import React, { Component } from 'react';
import { BasicElement, Grid, GridElement } from '../../Grid/index';
import gridify from "../../../../hoc/gridify";

class List extends Component {
    static renderChildren (children) {
        return children.map((child, index) => {
            return React.cloneElement(child, { className: [child.props.className, 'list-item'].filter(e => !!e).join(' '), col: 1, row: index + 1 });
        });
    }
    render() {
        const { children, columnsTemplate, rowsTemplate, gap, rowGap, colGap, ...otherProps } = this.props;
        return (
            <Grid { ...otherProps } columnsTemplate={columnsTemplate} rowsTemplate={rowsTemplate} gap={gap} rowGap={rowGap} colGap={colGap}>
                { List.renderChildren(children) }
            </Grid>
        );
    }
}

export const FooterList = gridify(List, { componentName: 'footer-list' });



export class Line extends Component {
    static renderChildren (children) {
        return children.map((child, index) => {
            return React.cloneElement(child, { className: [child.props.className, 'line-item'].filter(e => !!e).join(' '), col: index + 1, row: 1 });
        });
    }
    render() {
        const { children, columnsTemplate, rowsTemplate, gap, rowGap, colGap, ...otherProps } = this.props;
        return (
            <Grid { ...otherProps } columnsTemplate={columnsTemplate} rowsTemplate={rowsTemplate} gap={gap} rowGap={rowGap} colGap={colGap}>
                { Line.renderChildren(children) }
            </Grid>
        );
    }
}

export const FooterLine = gridify(Line, { forcedProps: { fullwidth: 'true' }, componentName: 'footer-line' });



export const FooterSeparator = gridify(BasicElement, { componentName: 'footer-separator' });