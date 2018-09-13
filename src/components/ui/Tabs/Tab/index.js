import React from 'react';
import PropTypes from 'prop-types';

import './stylesheet.scss';

const Tab = ({ current, value, label, children, onClick }) => (
  <button type="button" value={value} className={`tab ${current ? 'active' : ''}`} onClick={!current ? onClick : null}>
    <span className="tab-label">{ label || children }</span>
  </button>
);

Tab.defaultProps = {
  current: false,
  label: null,
  children: null,
  onClick: null,
};

Tab.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  current: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Tab;
