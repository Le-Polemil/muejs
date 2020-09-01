import React from 'react'
import useGridify from '../../../hooks'

export function Element({
    children,
    fill = false,
    type: Component = 'div',
    componentName = 'GridElement',
    ...otherProps
}) {
    const { className: gridClassName, style, ...props } = useGridify({
        ...otherProps,
        componentName
    })

    const classNames = [gridClassName, fill && 'fill'].filter(e => !!e).join(' ')

    return (
        <Component className={classNames} style={style} {...props}>
            {typeof children === 'function' ? children() : children}
        </Component>
    )
}
