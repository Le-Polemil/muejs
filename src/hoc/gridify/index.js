import React from 'react';
import { camelToKebab } from '../../filters/stringFormat';


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

          ...transmissibleProps
      } = props;

      const { selfRowTemplate, selfColTemplate, position: forcedPosition, shouldTransmitProps } = forcedProps;

      const isFixed = [position, forcedPosition].includes('fixed') ? 'fixed' : '';
      const col = isFixed ? 0 : defaultCol;
      const row = isFixed ? 0 : defaultRow;
      const width = fullwidth ? -1 : defaultWidth;
      const height = fullheight ? -1 : defaultHeight;

      const type = componentName || Component.displayName || `Gridified${Component.name || 'Component'}`;
      const classNames = [camelToKebab(type), className, justify && `justify-${justify}`, align && `align-${align}`, isFixed].filter(e => !!e).join(' ');

      // css variables
      let styles = { };
      if (width <= 0 && height <= 0) {
          styles['display'] = 'none';
      }
      else {
          if (col != 'auto') styles['--col'] = col;
          if (width != 1) styles['--width'] = width;
          if (row != 'auto') styles['--row'] = row;
          if (height != 1) styles['--height'] = height;
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
