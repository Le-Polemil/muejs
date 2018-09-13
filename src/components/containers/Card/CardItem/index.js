import React from 'react';
import { Footer, FooterLine } from '../../Footer/index';
import { GridElement } from '../../Grid/GridElement/index';

export const CardImage = (props) => {
    const { src, className, style } = props;
    return <GridElement { ...props } className={className}><img src={src} className={`card-image`} style={style} /></GridElement>;
};

export const CardDescription = (props) => {
    const { className, children, style } = props;
    return <GridElement { ...props } className={`card-description ${className || ''}`} style={style}>{ children }</GridElement>;
};

export const CardFooter = (props) => {
    const { className, children } = props;
    return <GridElement { ...props } className={`card-footer ${className || ''}`}>{ <Footer><FooterLine>{ children }</FooterLine></Footer> }</GridElement>;
};