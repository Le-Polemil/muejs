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
        return this.props.children;
    }
}

function withErrorBoundary(WrappedComponent) {
    return class extends Component {
        constructor(props) {
          super(props);
          this.state = { error: null, errorInfo: null };
        }
    
        componentDidCatch = (error, errorInfo) => catchFunc(error, errorInfo, this)
    
        render() {
          if (this.state.errorInfo) {
            return handleError(this)
          }
          // Normally, just render children
          return <WrappedComponent {...this.props} />;
        }
    }
}

const catchFunc = (error, errorInfo, ctx) => {
    // catch errors in any components below and re-render with error message
    ctx.setState({
        error: error,
        errorInfo: errorInfo
    })
    // log error messages, etc.
}

const handleError = ({ errorStyle, state }) => (
    // Error path
    <div className="error-boundary" style={errorStyle}>
        <h2>Something went wrong.</h2>
        
        <details style={{ whiteSpace: 'pre-wrap' }}>
            {state.error && state.error.toString()}
            <br />
            {state.errorInfo.componentStack}
        </details>
    </div>
)

export default withErrorBoundary