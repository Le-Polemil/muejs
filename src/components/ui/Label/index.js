import React from 'react';

import gridify from '../../../hoc/gridify';

import './index.styl';

const UngridifiedLabel = ({ children, className = '', ...otherProps }) => (
  <label className={className} {...otherProps}>
    { children }
  </label>
);

export const Label = gridify(UngridifiedLabel, { componentName: 'label' });
export default UngridifiedLabel;
