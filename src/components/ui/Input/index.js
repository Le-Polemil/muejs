import React from 'react';

import gridify from '../../../hoc/gridify';

import './index.styl';

const UngridifiedInput = ({ type = 'text', ...props }) => (
  <input type={type} {...props} />
);

export const Input = gridify(UngridifiedInput, { componentName: 'input' });
export default UngridifiedInput;
