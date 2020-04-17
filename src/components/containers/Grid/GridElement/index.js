import React from 'react';
import gridify from '../../../../hoc/gridify';

export function UngridifiedElement({ children, fill, className, type: Component = 'div', ...otherProps }) {
  const classNames = [className, fill ? "fill" : ""].join(' ').trim();
  return <Component className={classNames} {...otherProps}>{ children }</Component>
}

export const Element = gridify(UngridifiedElement, { componentName: 'GridElement' });



export const Row = gridify(UngridifiedElement, { componentName: 'Row' });
export const Column = gridify(UngridifiedElement, { componentName: 'Column' });
