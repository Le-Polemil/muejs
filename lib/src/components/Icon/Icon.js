import React from 'react'

import useGridify from '../../hooks'

import { camelToSnake } from '../../filters/stringFormat'

import './index.scss'

const MATERIAL_TYPES = ['outlined', 'two-tone', 'round', 'sharp']

export function Icon({
    children,
    size = '',
    svg,
    icon,
    onClick = undefined,
    clickable = !!onClick,
    iconType = 'round',
    ...otherProps
}) {
    const { className, ...props } = useGridify({
        componentName: 'Icon',
        ...otherProps
    })

    const iconFormatted = camelToSnake(
        icon || (typeof children === 'function' ? children() : children)
    )

    const materialClass = `material-icons${
        MATERIAL_TYPES.includes(iconType) ? `-${iconType}` : ''
    }`

    const classNames = [
        className,
        materialClass,
        svg && iconFormatted,
        size,
        clickable && 'pointer'
    ]
        .filter(e => !!e)
        .join(' ')

    return (
        <i className={classNames} onClick={onClick} {...props}>
            {svg ? (
                <svg viewBox='0 0 512 512' className='svg-container'>
                    <path className='svg-path' />
                </svg>
            ) : (
                iconFormatted
            )}
        </i>
    )
}
