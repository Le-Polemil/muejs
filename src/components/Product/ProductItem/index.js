import React, {Component} from 'react';
import { Footer, FooterLine } from '../../Footer/index';
import {GridElement} from "../../Grid/GridElement/index";

export class ProductImage extends GridElement {
    render() {
        const { props } = this;
        const { className, reverted, src } = props;
        return React.createElement(GridElement , {
            ...props,
            className: `product-image text-align-${reverted ? 'right' : 'left'} ${className || ''}`,
            children: <img src={src}/> });
    }
}

export class ProductDescription extends Component {
    render() {
        const { props } = this;
        const { className, children, style, reverted } = props;
        return React.createElement(GridElement , {
            ...props,
            className: `product-description text-align-${reverted ? 'right' : 'left'} ${className || ''}`,
            style: { ...style, alignSelf: 'center' },
            children: <div><span>{ children }</span></div> // div to get a display block around
        });
    }
}

export class ProductTitle extends Component {
    render() {
        const { props } = this;
        const { className, children, style, reverted } = props;
        return React.createElement(GridElement , {
            ...props,
            className: `product-title text-align-${reverted ? 'right' : 'left'} ${className || ''}`,
            style: { ...style, alignSelf: 'center' },
            children: <h4>{ children }</h4>
        });
    }
}

export class ProductInfo extends Component {
    render() {
        const { props } = this;
        const { className, children } = props;
        return React.createElement(GridElement , { ...props, className: `product-info h-align-center ${className || ''}`, children });
    }
}

export class ProductFooter extends Component {
    renderChildren () {
        const { props } = this;
        const children = Array.isArray(props.children) ? props.children : [props.children];

        return React.createElement(FooterLine, { ...props, children });
    }
    render() {
        const { props, renderChildren } = this;
        const { className } = props;
        return React.createElement(GridElement , { ...props, className: `h-align-center ${className || ''}`, children: <Footer>{ renderChildren() }</Footer> });
    }
}