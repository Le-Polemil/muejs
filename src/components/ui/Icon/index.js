import React from 'react';

import gridify from "../../../hoc/gridify";
import { camelToSnake } from "../../../filters/stringFormat";


import './index.styl';

const UngridifiedIcon = ({ children, className = '', size = '', svg, icon, href, iconType = 'round', ...otherProps }) => {
    const iconFormatted = camelToSnake(icon || children);
    const materialClass = `material-icons${['outlined', 'two-tone', 'round', 'sharp'].includes(iconType) ? `-${iconType}` : ''}`;
    const classNames = [materialClass,  svg ? iconFormatted : '', size, className].filter(e => !!e).join(' ');
    // if(href) {}
    return (
      <i className={classNames} {...otherProps}>
          { svg ? <svg viewBox="0 0 512 512" className="svg-container"><path className="svg-path" /></svg> : iconFormatted }
      </i>
    );
}


export default UngridifiedIcon

export const Icon = gridify(UngridifiedIcon, { componentName: 'icon' });
