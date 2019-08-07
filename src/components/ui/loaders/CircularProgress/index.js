import React from 'react';
import gridify from '../../../../hoc/gridify';
import './index.styl';

const CircularProgress = ({ size = '32', width = '6' }) => (
    <svg className="circular-spinner" width={size} height={size} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className="circular-spinner-path" fill="none" strokeWidth={width} strokeLinecap="round" cx="33" cy="33" r="30" />
    </svg>
);

export default gridify(CircularProgress);
