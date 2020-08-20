import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch = (error, errorInfo) => catchFunc(error, errorInfo, this)

    render() {
        if (this.state.errorInfo) {
            return handleError(this)
        }
        // Normally, just render children
        return this.props.children
    }
}

export const catchFunc = (error, errorInfo, ctx) => {
    // catch errors in any components below and re-render with error message
    ctx.setState({
        error: error,
        errorInfo: errorInfo
    })
    // log error messages, etc.
}

export const handleError = ({
    props: {
        className = '',
        style,
        fallback = 'Something went wrong.',
        showDetails = false
    } = {},
    state: { error, errorInfo } = {}
}) => (
    // Error path
    <div className={`text-secondary ${className}`.trim()} style={style}>
        <h2>{fallback}</h2>

        {showDetails && (
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {error && error.toString()}
                <br />
                {errorInfo.componentStack}
            </details>
        )}
    </div>
)

export default ErrorBoundary
