import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { UngridifiedElement, Grid } from '../../Grid/index';
import gridify from "../../../../hoc/gridify";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { uuid: uuid()}
    }

    renderChildren() {
        const { children } = this.props;
        const { uuid } = this.state;

        return React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { key: uuid, className: [child.props.className, 'list-item'].filter(e => !!e).join(' '), col: 1, row: index + 1 });
        });
    }

    render() {
        const { children, columnsTemplate, rowsTemplate, gap, rowGap, colGap, ...otherProps } = this.props;
        return (
            <Grid { ...otherProps } columnsTemplate={columnsTemplate} rowsTemplate={rowsTemplate} gap={gap} rowGap={rowGap} colGap={colGap}>
                { this.renderChildren() }
            </Grid>
        );
    }
}

export const FooterList = gridify(List, { componentName: 'footer-list' });



export class Line extends Component {
    constructor(props) {
        super(props);
        this.state = { uuid: uuid()}
    }

    renderChildren() {
        const { children } = this.props;
        const { uuid } = this.state;

        return React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { key: uuid, className: [child.props.className, 'line-item'].filter(e => !!e).join(' '), col: index + 1, row: 1 });
        });
    }

    render() {
        const { children, columnsTemplate, rowsTemplate, gap, rowGap, colGap, ...otherProps } = this.props;
        return (
            <Grid { ...otherProps } columnsTemplate={columnsTemplate} rowsTemplate={rowsTemplate} gap={gap} rowGap={rowGap} colGap={colGap}>
                { this.renderChildren() }
            </Grid>
        );
    }
}

export const FooterLine = gridify(Line, { forcedProps: { fullwidth: 'true' }, componentName: 'footer-line' });



export const FooterSeparator = gridify(UngridifiedElement, { componentName: 'footer-separator' });