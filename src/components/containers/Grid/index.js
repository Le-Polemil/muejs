import React, { useState, useEffect } from 'react';

import { NumberOrOne } from '../../../static/Math';

import { getTemplateLength, generateTemplate, calculateGridSize, getStyle } from './static';

import './index.styl';


export function Grid({ columnsTemplate, rowsTemplate, children, className, style, gap, colGap, rowGap, width: defaultWidth, height: defaultHeight, ...otherProps }) {
  return (
      <div className={`grid ${className || ''}`} style={getStyle({ style, columnsTemplate, rowsTemplate, gap, rowGap, colGap, width: defaultWidth, height: defaultHeight })}>
        { children }
      </div>
  );
}

export { Element, Row, Column, UngridifiedElement } from './GridElement';
