import React from 'react';

import gridify from "../../../hoc/gridify";
import { camelToSnake } from "../../../filters/stringFormat";


import './index.styl';

const UngridifiedIcon = ({ children, className = '', size = '', icon, href, ...otherProps }) => {
    const classNames = ['material-icons', size, className].filter(e => !!e).join(' ');
    // if(href) {}
    return (
        <i className={classNames} {...otherProps}>{ camelToSnake(icon || children) }</i>
    );
}


export default UngridifiedIcon

export const Icon = gridify(UngridifiedIcon, { componentName: 'icon' });
