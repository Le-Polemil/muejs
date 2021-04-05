import React from 'react'

import useGridify from '../../hooks/useGridify'

import { defaultProps, DIRECTIONS, propTypes } from './static'

export function Button({
    aspect,
    color,
    direction,
    type,
    disabled,

    className,
    style,
    onClick,
    text,
    icon,
    children,
    ...otherProps
}) {
    const {
        className: gridClassName,
        style: gridStyle = {},
        ...props
    } = useGridify({
        componentName: 'Button',
        ...otherProps,
    })

    return (
        <button
            className={[
                gridClassName,
                `${aspect}-${color}`,
                `to-${DIRECTIONS.includes(direction) ? direction : 'bottom'}`,
                className,
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
                    {icon &&
                        (typeof icon === 'string' ? (
                            <i className='material-icons mr-5'>{icon}</i>
                        ) : (
                            icon
                        ))}
                    {text}
                </span>
            ) : typeof children === 'function' ? (
                children()
            ) : (
                children
            )}
        </button>
    )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
