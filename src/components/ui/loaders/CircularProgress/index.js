import React from 'react';
import gridify from '../../../../hoc/gridify';
import './index.styl';

export const UngridifiedCircularProgress = ({ strokeWidth = '6', ...props }) => (
    <svg width="100" height="100" viewBox="0 0 100 100" {...props}>
        <circle className="circular-spinner-path" fill="none" strokeWidth={strokeWidth} strokeLinecap="round" cx="50" cy="50" r="47" />
    </svg>
);

export default gridify(UngridifiedCircularProgress, { componentName: 'circular-spinner' });
