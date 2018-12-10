import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { UngridifiedElement, Grid } from '../../Grid/index';
import gridify from "../../../../hoc/gridify";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { id: uuid()}
    }

    renderChildren() {
        const { children } = this.props;
        const { id } = this.state;

        return React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { key: id, className: [child.props.className, 'list-item'].filter(e => !!e).join(' '), col: 1, row: index + 1 });
        });
    }

    render() {
        const { children, ...otherProps } = this.props;
        return (
            <Grid { ...otherProps }>
                { this.renderChildren() }
            </Grid>
        );
    }
}

export const FooterList = gridify(List, { componentName: 'FooterList' });



export class Line extends Component {
    constructor(props) {
        super(props);
        this.state = { id: uuid()}
    }

    renderChildren() {
        const { children } = this.props;
        const { id } = this.state;

        return React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { key: id, className: [child.props.className, 'line-item'].filter(e => !!e).join(' '), col: index + 1, row: 1 });
        });
    }

    render() {
        const { children, ...otherProps } = this.props;
        return (
            <Grid { ...otherProps }>
                { this.renderChildren() }
            </Grid>
        );
    }
}

export const FooterLine = gridify(Line, { forcedProps: { fullwidth: 'true' }, componentName: 'FooterLine' });



export const FooterSeparator = gridify(UngridifiedElement, { componentName: 'FooterSeparator' });