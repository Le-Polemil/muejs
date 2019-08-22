import React from 'react';
import { Element } from '../../../containers/Grid';
import CustomSpinner from '../CustomSpinner';

const FullPageSpinner = ({ style, ...props }) => (
  <Element className="place-center" style={{ display: 'inline-grid', width: '100vw', height: '60vh', ...style }}>
    <CustomSpinner size="20vh" {...props} />
  </Element>
);

export default FullPageSpinner;
