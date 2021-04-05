import React from 'react'

import useGridify from '../../hooks/useGridify'

import { Icon } from '../Icon'

import { defaultProps, DIRECTIONS, propTypes } from './static'

import './index.scss'

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
    iconSide,
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
                `btn-${
                    color && aspect !== 'filled'
                        ? `${aspect}-${color}`
                        : color ?? ''
                }`,
                icon && `btn-with-icon icon-${iconSide}`,
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
            {!children && (
                <span
                    className={`flex align-items-center justify-center ${
                        iconSide === 'left' ? 'flex-reverse' : ''
                    }`}
                >
                    {text}

                    {icon &&
                        (typeof icon === 'string' ? (
                            <Icon icon={icon} />
                        ) : (
                            icon
                        ))}
                </span>
            )}
            {children && typeof children === 'function' ? children() : children}
        </button>
    )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
