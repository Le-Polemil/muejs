import memoize from 'lodash.memoize';
import get from 'lodash.get';
import { isObject } from './typeCheck';

export const getCSSVarForDimension = memoize(({ dimension, size, defaultValue }) => {

  if (isObject(dimension)) {
    console.log({ dimension, size })
    const dimensionForSize = get(dimension, size);
    if (dimensionForSize && dimensionForSize !== defaultValue) {
      return dimensionForSize;
    }
  }
  else if (['string', 'number'].includes(typeof dimension) && size === 'xs' && dimension !== defaultValue) {
    return dimension;
  }

}, ({ dimension, size, defaultValue }) => `memoized#getCSSVarForDimension#${JSON.stringify(dimension)}#${size}#${defaultValue}`)
