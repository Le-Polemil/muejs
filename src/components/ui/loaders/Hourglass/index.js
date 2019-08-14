import React from 'react';
import gridify from '../../../../hoc/gridify';
import './index.styl';

const Hourglass = ({ size, ...props }) => (
  <div className="hourglass" style={{ '--size': size }} {...props}>
    <svg className="full" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
      <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"/>
      <path d="M0 0h24v24H0V0z" fill="none" />
    </svg>
    <svg className="empty" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
      <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/>
      <path d="M0 0h24v24H0V0z" fill="none" />
    </svg>
  </div>
);

export default gridify(Hourglass);