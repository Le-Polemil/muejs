import React from 'react'

import useGridify from '../../hooks/useGridify'

import { ErrorBoundary } from '../ErrorBoundary'

import { defaultProps, propTypes } from './static'

export function UncatchedFlex({ column, reverse, children, ...otherProps }) {
    const { className, ...props } = useGridify({
        componentName: 'Flex',
        ...otherProps,
    })

    return (
        <div
            className={[
                className,
                column && 'flex-column',
                reverse && 'reverse',
            ]
                .filter(e => !!e)
                .join(' ')}
            {...props}
        >
            {typeof children === 'function' ? children() : children}
        </div>
    )
}

UncatchedFlex.propTypes = propTypes
UncatchedFlex.defaultProps = defaultProps

export const Flex = props => {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedFlex {...props} />
        </ErrorBoundary>
    )
}

Flex.propTypes = propTypes
Flex.defaultProps = defaultProps

export default Flex
