import React, { createContext, useState, useCallback } from 'react'

import { tryParse } from '../../utils/parse'

export const DarkModeContext = createContext()
export default DarkModeContext

export const DarkModeConsumer = DarkModeContext.Consumer

const darkModeInLS = tryParse(localStorage.getItem('darkMode')) ?? ''

export const DarkModeProvider = ({
    initialState = darkModeInLS ?? null,
    children,
}) => {
    const [darkMode, _setDarkMode] = useState(initialState)

    const setDarkMode = useCallback(
        value => {
            _setDarkMode(!!value)
            localStorage.setItem('darkMode', !!value)
        },
        [!!value]
    )

    return (
        <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
            {children}
        </DarkModeContext.Provider>
    )
}
