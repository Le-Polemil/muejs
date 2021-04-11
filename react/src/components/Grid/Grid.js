import React from 'react'

import { ErrorBoundary } from '../ErrorBoundary'

import { getStyle, propTypes } from './static'

import './index.scss'

export const UncatchedGrid = ({
    className,
    style,
    columnsTemplate,
    rowsTemplate,
    gap,
    colGap,
    rowGap,
    width,
    height,
    children,
}) => {
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
                height,
            })}
        >
            {typeof children === 'function' ? children() : children}
        </div>
    )
}

UncatchedGrid.propTypes = propTypes

export const Grid = props => {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedGrid {...props} />
        </ErrorBoundary>
    )
}

Grid.propTypes = propTypes

export default Grid
