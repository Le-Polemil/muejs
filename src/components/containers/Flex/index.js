import React from 'react';

export function Flex({ children, className, ...otherProps }) {
  return (
      <div className={`flex ${className || ''}`} {...otherProps}>
        { children }
      </div>
  );
}
