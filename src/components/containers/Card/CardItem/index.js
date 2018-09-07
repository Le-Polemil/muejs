import React, { Component } from 'react';
import { Footer, FooterLine } from '../../Footer/index';
import { GridElement } from '../../Grid/GridElement/index';

export class CardImage extends Component {
    render() {
        const { src, className } = this.props;
        return <img src={src} className={`card-image h-align-center ${className || ''}`} />;
    }
}

export class CardDescription extends Component {
    render() {
        const { props } = this;
        const { className, children, style } = props;
        return React.createElement('div', { ...props, className: `card-description ${className || ''}`, style, children });
    }
}

// This is a
// <GridElement>
//      <Footer>
//          <FooterLine />
//      </Footer>
// </GridElement>
export class CardFooter extends Component {
    render() {
        const { className, children } = this.props;
        return React.createElement(GridElement , { ...this.props, className: `card-footer ${className || ''}`, children: <Footer><FooterLine>{ children }</FooterLine></Footer> });
    }
}