import React from 'react'
import { Link, Flex, Icon, useDarkMode, useGridify } from 'react-muejs'
import { useHistory } from 'react-router'

import './index.scss'

export default function Navbar({ className = '', ...props }) {
    const history = useHistory()
    const [darkMode, switchDarkMode] = useDarkMode()

    return (
        <Flex
            className={`navbar md-:ph-6vw lg+:ph-10vw pv-20 ${
                className ?? ''
            }`.trim()}
            justify='space-between'
            col='1'
            fullWidth
            {...props}
        >
            <Link align='items-center' to='/' history={history}>
                <Icon icon='home' className='mr-6' />
                Liste des composants
            </Link>
            <Icon
                icon={darkMode ? 'dark_mode' : 'light_mode'}
                onClick={switchDarkMode}
            />
        </Flex>
    )
}
