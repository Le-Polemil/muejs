import React, { Component } from 'react';
import { Grid, GridElement } from '../../Grid/index';

export class FooterList extends Component {
    static renderChildren (children) {
        return React.Children.map(children, (child, index) => {
            return <GridElement className='list-item' key={`${child.name}#${index}`} row={index + 1}>{ child }</GridElement>;
        });
    }
    render() {
        const { className, children } = this.props;
        return React.createElement(Grid, { ...this.props, className: `footer-list ${className || ''}`, children: FooterList.renderChildren(children) });
    }
}

export class FooterLine extends Component {
    static renderChildren (children, key) {
        return React.Children.map(children, (child, index) => {
            return <GridElement className='line-item' key={`${key}#${index}`} col={index + 1}>{ child }</GridElement>;
        });
    }
    render() {
        const { className, children, key } = this.props;
        return React.createElement(Grid, { ...this.props, fullWidth: true, className: `footer-line ${className || ''}`, children: FooterLine.renderChildren(children, key) });
    }
}