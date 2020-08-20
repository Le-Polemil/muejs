import React from 'react'

import { getStyle } from './static'

import './index.scss'
import withErrorBoundary from '../../hoc/withErrorBoundary'

export function Grid({
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
            {children}
        </div>
    )
}

export default withErrorBoundary(Grid)
