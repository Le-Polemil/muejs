import memoize from 'lodash.memoize'
import { isObject } from './typeCheck'

export const getCSSVarForDimension = memoize(
    ({ dimension, size, defaultValue, getPrefix = () => undefined }) => {
        if (isObject(dimension)) {
            const dimensionForSize = dimension?.[size]
            if (dimensionForSize && dimensionForSize !== defaultValue) {
                const prefix = getPrefix(dimensionForSize)
                return prefix
                    ? `${prefix}${dimensionForSize}`
                    : dimensionForSize
            }
        } else if (
            ['string', 'number'].includes(typeof dimension) &&
            size === 'xs' &&
            dimension !== defaultValue
        ) {
            const prefix = getPrefix(dimension)
            return prefix ? `${prefix}${dimension}` : dimension
        }
    },
    ({ dimension, size, defaultValue }) =>
        `memoized#getCSSVarForDimension#${JSON.stringify(
            dimension
        )}#${size}#${defaultValue}`
)
