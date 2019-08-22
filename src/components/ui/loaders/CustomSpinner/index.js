import React from 'react';
import gridify from '../../../../hoc/gridify';
import CircularProgress from '../CircularProgress';
import './index.styl';

const CustomSpinner = ({ svg: CustomIcon = CircularProgress, rotate = true, className, ...props }) => (
  <CustomIcon className={rotate && 'rotate'} {...props} />
);

export default gridify(CustomSpinner, { componentName: 'custom-spinner' });
