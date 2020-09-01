import React from 'react'

import useGridify from '../../hooks'

import './index.scss'

// Should do propsTypes
const DIRECTIONS = ['top', 'left', 'right', 'bottom']

export function Button({
    aspect = 'filled',
    color = 'primary',
    direction = 'bottom',
    type = 'button',
    disabled = false,

    className = '',
    style = {},
    onClick = () => undefined,
    text = null,
    icon = null,
    children = <div>No children given</div>,
    ...otherProps
}) {
    const { className: gridClassName, style: gridStyle = {}, ...props } = useGridify({
        componentName: 'Button',
        ...otherProps
    })

    return (
        <button
            className={[
                gridClassName,
                `${aspect}-${color}`,
                `to-${DIRECTIONS.includes(direction) ? direction : 'bottom'}`,
                className
            ]
                .filter(e => !!e)
                .join(' ')}
            style={gridStyle}
            type={!onClick && !type ? 'submit' : type}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {text ? (
                <span className='btn-label justify-center'>
                    {icon && <i className='material-icons mr-5'>{icon}</i>}
                    {text.toUpperCase()}
                </span>
            ) : typeof children === 'function' ? (
                children()
            ) : (
                children
            )}
        </button>
    )
}
