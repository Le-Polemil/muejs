import React from 'react'

import withErrorBoundary from '../../hoc/withErrorBoundary'

import { getStyle } from './static'
import './index.scss'

export function WithoutErrorBoundaryGrid({
    className,
    style,
    columnsTemplate,
    rowsTemplate,
    gap,
    colGap,
    rowGap,
    width,
    height,
    children
}) {
    return (
        <div
            className={['grid', className].filter(e => !!e).join(' ')}
            style={getStyle({
                style,
                columnsTemplate,
                rowsTemplate,
                gap,
                rowGap,
                colGap,
                width,
                height
            })}
        >
            {typeof children === 'function' ? children() : children}
        </div>
    )
}

export const Grid = withErrorBoundary(WithoutErrorBoundaryGrid)
