import React, { Component } from 'react'

import useGridify from '../../hooks'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch = (error, errorInfo) => catchFunc(error, errorInfo, this)

    render() {
        const { children } = this.props
        if (this.state.errorInfo) {
            return handleError(this)
        }
        // Normally, just render children
        return typeof children === 'function' ? children() : children
    }
}

export function ErrorMessage({
    fallback = 'Something went wrong.',
    showDetails = false,
    error,
    errorInfo,
    ...otherProps
}) {
    const { className, ...props } = useGridify({
        componentName: 'ErrorMessage',
        ...otherProps
    })

    return (
        <div className={`${className} text-secondary`.trim()} {...props}>
            {typeof fallback === 'function' ? (
                fallback({ error, errorInfo })
            ) : (
                <h2>{fallback}</h2>
            )}

            {showDetails && (
                <details className='error-details' style={{ whiteSpace: 'pre-wrap' }}>
                    <div className='text-error mb-32'>{error && error.toString()}</div>
                    <div className='text-dark'>{errorInfo.componentStack}</div>
                </details>
            )}
        </div>
    )
}

export const catchFunc = (error, errorInfo, ctx) => {
    // catch errors in any components below and re-render with error message
    ctx.setState({
        error: error,
        errorInfo: errorInfo
    })
    // log error messages, etc.
}

export function handleError({ props, state: { error, errorInfo } = {} }) {
    return <ErrorMessage {...props} error={error} errorInfo={errorInfo} />
}
