import React, { useState, useEffect } from 'react';

import { NumberOrOne } from '../../../static/Math';

import { getTemplateLength, generateTemplate, calculateGridSize, getStyle } from './static';

import './index.styl';


export const Grid = ({ columnsTemplate, rowsTemplate, children, className, style, gap, colGap, rowGap, width: defaultWidth, height: defaultHeight, ...otherProps }) => {
  // const [width, setWidth] = useState(defaultWidth);
  // const [height, setHeight] = useState(defaultHeight);
  //
  // useEffect(() => {
	// 	const [newWidth, newHeight] = calculateGridSize({ columnsTemplate, rowsTemplate, children });
	// 	if (newWidth === width && newHeight === height) return;
  //   setWidth(newWidth);
  //   setHeight(newHeight);
  // }, [children]);


  return (
      <div className={`grid ${className || ''}`} style={getStyle({ style, columnsTemplate, rowsTemplate, gap, rowGap, colGap, width: defaultWidth, height: defaultHeight })}>
        { children }
      </div>
  );
}

export { Element, Row, Column, UngridifiedElement } from './GridElement';
