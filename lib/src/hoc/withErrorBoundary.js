import React, { Component } from 'react'

import { handleError, catchFunc } from '../components/ErrorBoundary'

function withErrorBoundary(WrappedComponent) {
    return class extends Component {
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
            return <WrappedComponent {...this.props} />
        }
    }
}

export default withErrorBoundary
