import React from 'react';
import { Footer, FooterLine } from '../../Footer/index';
import { GridElement } from '../../Grid/GridElement/index';

export const CardImage = (props) => {
    return <GridElement { ...props }><img src={props.src} className={`card-image`} style={props.style}/></GridElement>;
};

export const CardDescription = (props) => {
    const { className, children } = props;
    return <GridElement { ...props } className={`card-description ${className || ''}`}>{ children }</GridElement>;
};

export const CardFooter = (props) => {
    const { className, children } = props;
    return <GridElement { ...props } className={`card-footer ${className || ''}`}>{ <Footer><FooterLine>{ children }</FooterLine></Footer> }</GridElement>;
};