import React from 'react';
import Footer, { FooterLine } from '../../Footer';
import {GridElement} from "../../Grid/GridElement";

export class ProductImage extends GridElement {
    constructor(props) {
        super(props);
        this.source = props.src;
        this.reverted = props.reverted;
    }
    getClassName() {
        return `product-image h-align-${this.reverted ? 'right' : 'left'}${this.className ? ' ' + this.className : ''}`;
    }
    render() {
        this.children = <img src={this.source} style={this.getStyle()} className={this.getClassName()} />;
        return super.render();
    }
}

export class ProductDescription extends GridElement {
    constructor(props) {
        super(props);
        this.reverted = props.reverted;
    }
    getClassName() {
        return `product-description text-align-${this.reverted ? 'right' : 'left'}${this.className ? ' ' + this.className : ''}`;
    }
    getStyle() {
        const style = {
            alignSelf: 'center'
        };
        return { ...this.style, ...style };
    }
    render() {
        return <div className={this.getClassName()} style={this.getStyle()}><span>{ this.children }</span></div>;
    }
}

export class ProductTitle extends GridElement {
    constructor(props) {
        super(props);
        this.reverted = props.reverted;
    }
    getClassName() {
        return `product-title text-align-${this.reverted ? 'right' : 'left'}${this.className ? ' ' + this.className : ''}`;
    }
    getStyle() {
        const style = {
            alignSelf: 'center'
        };
        return { ...this.style, ...style };
    }
    render() {
        return <div className={this.getClassName()} style={this.getStyle()}><h4>{ this.children }</h4></div>;
    }
}

export class ProductInfo extends GridElement {
    constructor (props) {
        super(props);
        this.reverted = props.reverted;
    }
    getClassName() {
        return `product-info h-align-center${this.className ? ' ' + this.className : ''}`;
    }
    transmitRevertedPropToChildren() {
        if (!this.children)
            return null;
        if (!Array.isArray(this.children))
            this.children = [this.children];
        this.children = this.children.map(element => ({ ...element, props: { ...element.props, reverted: this.reverted }}));
    }
    render() {
        if (this.reverted)
            this.transmitRevertedPropToChildren();
        return super.render();
    }
}

export class ProductFooter extends GridElement {
    constructor(props) {
        super(props);
        this.reverted = props.reverted;
    }
    getClassName() {
        return `product-footer h-align-center${this.className ? ' ' + this.className : ''}`;
    }
    renderChildren() {
        return <FooterLine style={this.getStyle()} className={this.getClassName()}>{this.children}</FooterLine>
    }
    render() {
        return <Footer>{ this.renderChildren() }</Footer>
    }
}