import React from 'react';
import gridify from '../../../../hoc/gridify';

import Icon from '../../../ui/Icon';


const Item = ({ type: Type = 'span', logo, brand, label, children = label, icon, iconType: IconType = Icon, className, ...otherProps }) => (
  <>
    { (children || label || Type !== 'span') && <Type className={[logo && 'logo', brand && 'brand', children && !brand && !logo && 'label', !children && (icon || IconType) && 'icon', children && (icon || IconType !== Icon) && 'hide-until-lg', className].filter(e => !!e).join(' ').trim()} {...otherProps}>{ children }</Type> }
    { (icon || IconType !== Icon) && <IconType className={['icon', children && 'hide-since-lg', className].filter(e => !!e).join(' ').trim()} icon={icon} {...otherProps} /> }
  </>
);
export const NavItem = gridify(Item, { componentName: 'NavItem' });
