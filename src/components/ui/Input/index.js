import React from 'react';

import gridify from '../../../hoc/gridify';

import './index.styl';

const UngridifiedInput = (props) => (
  <input {...props} />
);

export const Input = gridify(UngridifiedInput, { componentName: 'input' });
export default UngridifiedInput;
