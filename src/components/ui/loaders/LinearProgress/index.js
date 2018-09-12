import React from 'react';
import './index.styl';

const LinearProgress = ({ size = 35 }) => (
    <div className="position-relative">
        <svg
            className="linear-spinner"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 3"
            preserveAspectRatio="none"
        >
            <rect className="linear-spinner-path" fill="#c6c3b9" width={100} strokeDasharray={`${size} 100`} height={3} />
        </svg>
    </div>
);

export default LinearProgress;