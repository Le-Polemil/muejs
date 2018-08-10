import React, { Component } from 'react';
import { Footer, FooterLine } from '../../Footer';
import { GridElement } from '../../Grid/GridElement';

export class CardImage extends Component {
    render() {
        const { src, className } = this.props;
        return <img src={src} className={`card-image h-align-center ${className || ''}`} style={{ maxHeight: '50rem' }}/>;
    }
}

export class CardDescription extends Component {
    render() {
        const { props } = this;
        const { className, children, style } = props;
        return React.createElement('div', { ...props, className: `card-description h-align-center ${className || ''}`, style, children });
    }
}

// This is a
// <GridElement>
//      <Footer>
//          <FooterLine />
//      </Footer>
// </GridElement>
export class CardFooter extends Component {
    renderChildren () {
        const { props } = this;
        const children = Array.isArray(props.children) ? props.children : [props.children];

        return React.createElement(<FooterLine/>, { ...props, children });
    }
    render() {
        const { props, renderChildren } = this;
        const { className } = props;
        return React.createElement(<GridElement />, { ...props, className: `h-align-center ${className || ''}`, children: <Footer>{ renderChildren() }</Footer> });
    }
}