import React, { createContext, useState } from 'react'

export const DarkModeContext = createContext()
export default DarkModeContext

export const DarkModeConsumer = DarkModeContext.Consumer

const darkModeInLS = localStorage.getItem('darkMode') ?? ''

export const DarkModeProvider = ({
    initialState = darkModeInLS === 'true' ?? null,
    children,
}) => {
    const [darkMode, _setDarkMode] = useState(initialState)

    function setDarkMode(value) {
        _setDarkMode(!!value)
        localStorage.setItem('darkMode', !!value)
    }

    function switchDarkMode() {
        setDarkMode(!darkMode)
    }

    return (
        <DarkModeContext.Provider
            value={[darkMode, switchDarkMode, setDarkMode]}
        >
            {children}
        </DarkModeContext.Provider>
    )
}
