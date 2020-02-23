import React from 'react';
import deepEqual from 'lodash.isequal';
import { Row } from '../Grid';
import gridify from '../../../hoc/gridify';

import './index.styl';


const UngridifiedNavbar = ({ type: Type = Row, lean = false, primaryBG = true, leanSize = '', className, children, style, ...otherProps }) => (
  <Type className={[primaryBG && 'bg-primary', lean && 'lean-bottom-right', leanSize ? 'lean-' + leanSize : '', className].filter(e => !!e).join(' ').trim()} style={{ boxSizing: (lean || leanSize) && 'content-box', ...style }} {...otherProps}>
    { children }
  </Type>
);

export const Navbar = gridify(UngridifiedNavbar, { componentName: 'Navbar' });
export default UngridifiedNavbar;

export * from './NavItem';
