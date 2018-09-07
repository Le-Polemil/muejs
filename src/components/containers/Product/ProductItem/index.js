import React, {Component} from 'react';
import { Footer, FooterLine } from '../../Footer/index';
import {GridElement} from "../../Grid/GridElement/index";

export class ProductImage extends GridElement {
    render() {
        const { className, reverted, src } = this.props;
        return React.createElement(GridElement , {
            ...this.props,
            className,
            children: <img className={`product-image text-align-${reverted ? 'right' : 'left'}`} key={src} src={src}/>
        });
    }
}

export class ProductDescription extends Component {
    render() {
        const { className, children, style, reverted } = this.props;
        return React.createElement(GridElement , {
            ...this.props,
            className: `product-description text-align-${reverted ? 'right' : 'left'} ${className || ''}`,
            style: { ...style, alignSelf: 'center' },
            children: <span key={0} className="block">{ children }</span> // div to get a display block around
        });
    }
}

export class ProductTitle extends Component {
    render() {
        const { className, children, style, reverted } = this.props;
        return React.createElement(GridElement , {
            ...this.props,
            className: `product-title text-align-${reverted ? 'right' : 'left'} ${className || ''}`,
            style: { ...style, alignSelf: 'center' },
            children: <h4 key={0}>{ children }</h4>
        });
    }
}

export class ProductInfo extends Component {
    render() {
        const { className, children } = this.props;
        return React.createElement(GridElement , { ...this.props, className: `product-info h-align-center ${className || ''}`, children });
    }
}

export class ProductFooter extends Component {
    render() {
        const { className } = this.props;
        return React.createElement(GridElement , { ...this.props, className: `h-align-center ${className || ''}`, children: <Footer><FooterLine>{ children }</FooterLine></Footer> });
    }
}