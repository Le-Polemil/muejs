import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-muejs'

import Router from './pages'

export default function App() {
    console.log('rerender')
    return <Router />
}

ReactDOM.render(
    <ErrorBoundary
        fallback='Houston, on a un problème'
        showDetails
        className='text-dark'
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root')
)
