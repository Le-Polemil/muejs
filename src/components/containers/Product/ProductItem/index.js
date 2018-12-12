import React from 'react';
import { Footer, FooterLine } from '../../Footer/index';
import { GridElement } from '../../Grid/GridElement/index';

export const ProductImage = (props) => {
    const { src, style, ...otherProps } = props;
    return <GridElement { ...otherProps }><img className="product-image" src={src} style={style} /></GridElement>;
};

export const ProductDescription = (props) => {
    const { className, children, style, align, ...otherProps } = props;
    return (
        <GridElement { ...otherProps } className={`product-description text-align-${align ? align : 'left'} ${className || ''}`} style={{ alignSelf: 'center', ...style }}>
            <span className="block">{ children }</span>
        </GridElement>
    );
};

export const ProductTitle = (props) => {
    const { className, children, style, align, ...otherProps } = props;
    return (
        <GridElement { ...otherProps } className={`product-title text-align-${align ? align : 'left'} ${className || ''}`} style={{ alignSelf: 'center', textTransform: 'uppercase', ...style }}>
            <h4 className="block">{ children }</h4>
        </GridElement>
    );
};

export const ProductInfo = (props) => {
    const { className } = props;
    return <GridElement { ...props } className={`product-info h-align-center ${className || ''}`} />;
};

export const ProductFooter = (props) => {
    const { className, children, ...otherProps } = props;
    return <GridElement { ...otherProps } className={`h-align-center ${className || ''}`}><Footer><FooterLine>{ children }</FooterLine></Footer></GridElement>;
};