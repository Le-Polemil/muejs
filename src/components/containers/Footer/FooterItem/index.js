import React, { Component } from 'react';
import { Grid, GridElement, Row } from '../../Grid/index';

export class FooterList extends Component {
    static renderChildren (children) {
        return React.Children.map(children, (child, index) => {
            return <GridElement className='list-item' key={`${child.name}#${index}`} row={index + 1}>{ child }</GridElement>;
        });
    }
    render() {
        const { className, children } = this.props;
        return React.createElement(GridElement, { ...this.props, className: `footer-list ${className || ''}` }, <Grid>{ FooterList.renderChildren(children) }</Grid>);
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
        return React.createElement(Row, { ...this.props, className: `footer-line ${className || ''}` }, <Grid>{ FooterLine.renderChildren(children, key) }</Grid>);
    }
}

export class FooterSeparator extends Component {
    render() {
        return <GridElement {...this.props} className="footer-separator" />;
    }
}