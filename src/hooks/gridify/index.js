import React, { useState } from 'react';
import get from 'lodash.get';

import { camelToKebab } from '../../filters/stringFormat';
import { getCSSVarForDimension } from '../../utils/gridify';

export const useGridify = ({
    col: defaultCol,
    row: defaultRow,
    width,
    height,

    className, style,
    position,
    justify, align,

    show, hide,

    shouldTransmitProps,
    selfRowTemplate, selfColTemplate,
    componentName,
  }) => {

    if (show !== undefined && !show || hide) return null;

    const isFixed = [position].includes('fixed') ? 'fixed' : '';
    const col = isFixed ? 0 : defaultCol;
    const row = isFixed ? 0 : defaultRow;

    const type = componentName || Component.displayName || `Gridified${Component.name || 'Component'}`;

    // css variables
    const styles = { };
    if (parseInt(width, 10) <= 0 && parseInt(height, 10) <= 0) {
        styles['display'] = 'none';
    }
    else {
      ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].forEach(size => {
        const suffix = size !== 'xs' ? `-${size}` : '';

        styles[`--col${suffix}`] =    getCSSVarForDimension({ dimension: col, size, defaultValue: 'auto' });
        styles[`--row${suffix}`] =    getCSSVarForDimension({ dimension: row, size, defaultValue: 'auto' });
        styles[`--width${suffix}`] =  getCSSVarForDimension({ dimension: width, size, defaultValue: 1 });
        styles[`--height${suffix}`] = getCSSVarForDimension({ dimension: height, size, defaultValue: 1 });
      });
    }

    const gridElementProps = shouldTransmitProps ? { col, row, width, height } : {};

    return {
      hide: ((show !== undefined && !show) || hide),

      className: [camelToKebab(type), className, justify && `justify-${justify}`, align && `align-${align}`, isFixed].filter(e => !!e).join(' '),
      style: { ...styles, ...style },
      ...gridElementProps,
    }
}

export default useGridify;
