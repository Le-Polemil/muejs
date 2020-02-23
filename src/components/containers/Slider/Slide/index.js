import React from 'react';

export const Slide = ({ activeSlide, index, slideCount, children, className, style, ...otherProps }) => {
  if (activeSlide === undefined) return;

  let distance = index - activeSlide;
  if (Math.abs(distance) === slideCount - 1) distance = -Math.sign(distance);

  return (
    <div
      className={['slide', (Math.abs(distance) > 0) ? 'opacity-0' : '', className].filter(e => !!e).join(' ')}
      style={{ zIndex: slideCount - Math.abs(distance), transform: `translateX(${(distance) * 100}%)`, ...style }}
      {...otherProps}
    >
      { children }
    </div>
  );
}
