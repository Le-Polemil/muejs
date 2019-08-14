import React from 'react';
import { Element } from '../../../containers/Grid';
import Hourglass from '../Hourglass';

const FullPageSpinner = ({ style, ...props }) => (
  <Element className="place-center" style={{ width: '100vw', height: '100vh', display: 'inline-grid', ...style }}>
    <Hourglass {...props} />
  </Element>
);

export default FullPageSpinner;
