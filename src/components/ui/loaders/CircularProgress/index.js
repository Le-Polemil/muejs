import React from 'react';
import gridify from '../../../../hoc/gridify';
import './index.styl';

const CircularProgress = ({ size = '32px', width = '6', ...props }) => (
    <svg className="circular-spinner" width="66" height="66" viewBox="0 0 66 66" style={{ '--size': size }} {...props}>
        <circle className="circular-spinner-path" fill="none" strokeWidth={width} strokeLinecap="round" cx="33" cy="33" r="30" />
    </svg>
);

export default gridify(CircularProgress);
