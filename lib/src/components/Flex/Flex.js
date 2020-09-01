import React from 'react'

import useGridify from '../../hooks'

export function Flex({ column, reverse, children, ...otherProps }) {
    const { className, ...props } = useGridify({
        componentName: 'Flex',
        ...otherProps
    })

    return (
        <div
            className={[className, column && 'flex-column', reverse && 'reverse']
                .filter(e => !!e)
                .join(' ')}
            {...props}
        >
            {typeof children === 'function' ? children() : children}
        </div>
    )
}
