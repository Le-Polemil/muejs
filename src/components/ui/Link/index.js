import React from 'react';

import gridify from '../../../hoc/gridify';

const UngridifiedLink = ({ children, newTab, src, target, className = '', ...otherProps }) => (
  <a href={src} target={newTab ? '_blank' : target} className={className} {...otherProps}>
    { children }
  </a>
);

export const Link = gridify(UngridifiedLink, { componentName: 'link' });
export default UngridifiedLink;
