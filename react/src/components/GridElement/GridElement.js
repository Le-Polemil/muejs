import React from 'react'

import useGridify from '../../hooks/useGridify'

import { ErrorBoundary } from '../ErrorBoundary'

import { defaultProps, propTypes } from './static'

import './index.scss'

export const UncatchedElement = ({
    children,
    fill,
    type: Component,
    componentName,
    ...otherProps
}) => {
    const { className: gridClassName, style, ...props } = useGridify({
        ...otherProps,
        componentName,
    })

    const classNames = [gridClassName, fill && 'fill']
        .filter(e => !!e)
        .join(' ')

    return (
        <Component className={classNames} style={style} {...props}>
            {typeof children === 'function' ? children() : children}
        </Component>
    )
}

UncatchedElement.propTypes = propTypes
UncatchedElement.defaultProps = defaultProps

export const Element = props => {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedElement {...props} />
        </ErrorBoundary>
    )
}

Element.propTypes = propTypes
Element.defaultProps = defaultProps

export default Element
