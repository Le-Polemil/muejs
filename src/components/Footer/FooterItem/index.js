import React, { Component } from 'react';
import { Grid, GridElement } from '../../Grid/index';

export class FooterElement extends Component {
    render() {
        const { props } = this;
        const { className, children } = props;
        return React.createElement(GridElement , { ...props, className: `footer-element ${className || ''}`, children });
    }
}

export class FooterList extends Component {
    renderChildren () {
        const { children } = this.props;
        return React.Children.map(children, (child, index) => {
            return <GridElement className='list-item' row={index + 1}>{ child }</GridElement>;
        });
    }
    render() {
        const { props, renderChildren } = this;
        const { className } = props;
        return React.createElement(FooterElement , { ...props, className: `footer-list ${className || ''}`, children: <Grid>{ renderChildren() }</Grid> });
    }
}

export class FooterLine extends Component {
    renderChildren () {
        const { children } = this.props;
        return React.Children.map(children, (child, index) => {
            return <GridElement className='line-item' col={index + 1}>{ child }</GridElement>;
        });
    }
    render() {
        const { props, renderChildren } = this;
        const { className } = props;
        return React.createElement(FooterElement , { ...props, fullWidth: true, className: `footer-line ${className || ''} h-align-items-center`, children: <Grid>{ renderChildren() }</Grid> });
    }
}