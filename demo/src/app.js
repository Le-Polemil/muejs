import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { DarkModeProvider, useDarkMode, ErrorBoundary } from 'react-muejs'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import Router from './pages'

export default function App() {
    const [darkMode] = useDarkMode()
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location?.pathname])

    useEffect(() => {
        document.querySelector('body').classList.toggle('dark-mode', darkMode)
    }, [darkMode])

    return <Router />
}

ReactDOM.render(
    <ErrorBoundary fallback='Houston, on a un problème' showDetails>
        <BrowserRouter>
            <DarkModeProvider>
                <App />
            </DarkModeProvider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root')
)
