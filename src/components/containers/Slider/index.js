import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import { useGridify } from '../../../hooks';

import { Icon } from "../../ui/Icon";
import { Slide } from './Slide';

import './index.styl';


export const Slider = ({ start = 0, children, loop = true, className, style = {}, ...props }) => {
  const [id] = useState(uuid());
  const { hide, className: gridifyClassName, style: gridifyStyle } = useGridify({ componentName: 'slider', ...props });

  const [activeSlide, setActiveSlide] = useState(start);
  const slideCount = React.Children.count(children);


  if (hide) return null;
  if (!children || slideCount <= 0) return null;


  return (
    <div className={[gridifyClassName, className].filter(e => !!e).join(' ').trim()} style={{ ...gridifyStyle, ...style }} { ...props }>

      { (loop || activeSlide > 0) && (
        <Icon
          onClick={() => setActiveSlide((activeSlide - 1 >= 0) ? activeSlide - 1 : slideCount - 1)}
          position="absolute"
          className="left-arrow"
          style={{ zIndex: slideCount + 1 }}
        >
          keyboard_arrow_left
        </Icon>
      ) }

      <div id={id} className="slider-wrapper">
        { React.Children.map(children, (child, index) => {
          return (
            <Slide key={`slide#${id}#${index}`} slideCount={slideCount} index={index} activeSlide={activeSlide}>
              { child }
            </Slide>
          );
        }) }
      </div>

      { (loop || activeSlide < slideCount - 1) && (
        <Icon
          onClick={() => setActiveSlide((activeSlide + 1) % slideCount)}
          position="absolute"
          className="right-arrow"
          style={{ zIndex: slideCount + 1 }}
        >
          keyboard_arrow_right
        </Icon>
      ) }

    </div>
  );
};

export * from './Slide';
