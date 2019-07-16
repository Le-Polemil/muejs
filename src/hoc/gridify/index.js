import React from 'react';
import get from 'lodash.get';

import { camelToKebab } from '../../filters/stringFormat';
import { isObject } from '../../utils/typeCheck';


function gridify(Component, { forcedProps = {}, componentName } = {}) {

    function getDefaultProps(forcedPropsName, defaultValue = undefined) {
        return (forcedProps[forcedPropsName] !== undefined) ? forcedProps[forcedPropsName] : defaultValue;
    }

    const GridifiedComponent = (props) => {
      let {
          col: defaultCol,
          row: defaultRow,
          width: defaultWidth,
          height: defaultHeight,
          fullwidth,
          fullheight,

          idgrid,
          children,

          className, style,
          position,
          justify, align,

          show,
          hide,

          ...transmissibleProps
      } = props;

      if (show !== undefined && !show || hide !== undefined && hide) return null;


      const { selfRowTemplate, selfColTemplate, position: forcedPosition, shouldTransmitProps, hide: forcedHide, show: forcedShow } = forcedProps;
      if (forcedShow !== undefined && !forcedShow || forcedHide !== undefined && forcedHide) return null;

      const isFixed = [position, forcedPosition].includes('fixed') ? 'fixed' : '';
      const col = isFixed ? 0 : defaultCol;
      const row = isFixed ? 0 : defaultRow;
      const width = fullwidth ? -1 : defaultWidth;
      const height = fullheight ? -1 : defaultHeight;

      const type = componentName || Component.displayName || `Gridified${Component.name || 'Component'}`;
      const classNames = [camelToKebab(type), className, justify && `justify-${justify}`, align && `align-${align}`, isFixed].filter(e => !!e).join(' ');

      // css variables
      let styles = { };
      if (parseInt(width, 10) <= 0 && parseInt(height, 10) <= 0) {
          styles['display'] = 'none';
      }
      else {
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
          const suffix = size !== 'xs' ? `-${size}` : '';

          if (isObject(col)) {
            const trueCol = get(col, size);
            if (trueCol && trueCol !== 'auto') styles[`--col${suffix}`] = trueCol;
          }
          else if (['string', 'number'].includes(typeof col) && size === 'xs' && col !== 'auto') {
            styles[`--col${suffix}`] = col;
          }

          if (isObject(row)) {
            const trueRow = get(row, size);
            if (trueRow && row !== 'auto') styles[`--row${suffix}`] = trueRow;
          }
          else if (['string', 'number'].includes(typeof row) && size === 'xs' && row !== 'auto') {
            styles[`--row${suffix}`] = row;
          }



          if (isObject(width)) {
            const trueWidth = get(width, size);
            if (trueWidth && parseInt(width, 10) !== 1) styles[`--width${suffix}`] = trueWidth;
          }
          else if (['string', 'number'].includes(typeof width) && size === 'xs' && parseInt(width, 10) !== 1) {
            styles[`--width${suffix}`] = width;
          }

          if (isObject(height)) {
            const trueHeight = get(height, size);
            if (trueHeight && parseInt(height, 10) !== 1) styles[`--height${suffix}`] = trueHeight;
          }
          else if (['string', 'number'].includes(typeof height) && size === 'xs' && parseInt(height, 10) !== 1) {
            styles[`--height${suffix}`] = height;
          }

        })
      }
      styles = { ...styles, ...style };

      const gridElementProps = shouldTransmitProps ? { col, row, width, height, fullwidth, fullheight } : {};

      return (
          <Component
              {...transmissibleProps}
              {...gridElementProps}

              className={classNames}
              style={styles}
          >
              { children }
          </Component>
      );

    }

    GridifiedComponent.defaultProps = {
        className: getDefaultProps('className', ''),
        style: getDefaultProps('style', {}),

        col: getDefaultProps('col', 'auto'),
        row: getDefaultProps('row', 'auto'),

        width: getDefaultProps('width', 1),
        height: getDefaultProps('height', 1),

        fullwidth: getDefaultProps('fullwidth', false),
        fullheight: getDefaultProps('fullheight', false),
    };

    return GridifiedComponent;
}


export default gridify;
