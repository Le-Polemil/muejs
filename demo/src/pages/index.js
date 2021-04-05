import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

// components
import { ErrorBoundary } from 'react-muejs'

// pages
import Home from './Home'

function UncatchedRouter() {
    return (
        <Switch>
            <Route path='/' component={Home} />
        </Switch>
    )
}

function Router(props) {
    return (
        <ErrorBoundary
            fallback='Houston, on a un problème'
            showDetails
            className='text-dark'
        >
            <UncatchedRouter {...props} />
        </ErrorBoundary>
    )
}

export default withRouter(Router)
