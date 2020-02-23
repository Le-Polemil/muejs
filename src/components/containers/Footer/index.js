import React, { Component } from 'react';
import './index.styl';

import { Grid } from '../Grid';
import gridify from '../../../hoc/gridify';

const UngridifiedFooter = ({ children, className, lean = false, leanSize = '', ...otherProps  }) => (
  <Grid className={['bg-primary', lean && 'lean-top-right', leanSize ? 'lean-' + leanSize : '', className].filter(e => !!e).join(' ').trim()} {...otherProps}>
    { children }
  </Grid>
);


export const Footer = gridify(UngridifiedFooter, { forcedProps: { fullwidth: 'true', selfRowTemplate: 'fit-content(100%)' }, componentName: 'Footer' });
export default UngridifiedFooter;

export * from './FooterItem';
