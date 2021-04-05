import { useContext } from 'react'

import { DarkModeContext } from '../contexts/darkMode'

export const useDarkMode = () => {
    try {
        const [darkMode, setDarkMode] = useContext(DarkModeContext)

        return [darkMode, setDarkMode]
    } catch (error) {
        return { error }
    }
}

export default useDarkMode
