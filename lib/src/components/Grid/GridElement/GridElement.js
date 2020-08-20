import React from 'react'
import useGridify from '../../../hooks'

export function Element({
    children,
    fill = false,
    className = '',
    style = {},
    type: Component = 'div',
    componentName = 'GridElement',
    ...otherProps
}) {
    const { className: gridClassName, style: gridStyle = {}, ...props } = useGridify({
        ...otherProps,
        componentName
    })

    const classNames = [gridClassName, fill && 'fill', className]
        .filter(e => !!e)
        .join(' ')

    return (
        <Component className={classNames} style={{ ...style, ...gridStyle }} {...props}>
            {children}
        </Component>
    )
}

export default Element
