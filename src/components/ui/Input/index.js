import React from 'react';

import gridify from '../../../hoc/gridify';

import './index.styl';

const UngridifiedInput = ({ children, type, className = '', placeholder, ...otherProps }) => (
  <input type={type} placeholder={placeholder} className={className} {...otherProps} />
);

export const Input = gridify(UngridifiedInput, { componentName: 'input' });
export default UngridifiedInput;
