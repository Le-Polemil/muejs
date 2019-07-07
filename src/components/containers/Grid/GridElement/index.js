import React from 'react';
import gridify from '../../../../hoc/gridify';

export const UngridifiedElement  = ({ children, fill, className, type: Component, ...otherProps }) => {
  const classNames = [className, fill ? "fill" : ""].join(' ').trim();
  return Component ?
         <Component className={classNames} {...otherProps}>{ children }</Component> :
         <div className={classNames} {...otherProps}>{ children }</div>;
}

export const Element = gridify(UngridifiedElement, { componentName: 'GridElement' });



export const Row = gridify(UngridifiedElement, { componentName: 'Row' });
export const Column = gridify(UngridifiedElement, { componentName: 'Column' });
