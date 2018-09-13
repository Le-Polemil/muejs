import React from 'react';
import {Grid } from '../Grid/index';

import './index.styl';

export const Product = (props) => {
    const { className, children } = props;
    return <Grid { ...props } className={`product ${className || ''}`}>{ children }</Grid>;
};

export * from './ProductItem';