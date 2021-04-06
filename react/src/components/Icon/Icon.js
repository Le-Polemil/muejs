import React from 'react'

import useGridify from '../../hooks/useGridify'

import { camelToSnake } from '../../utils/stringFormat'

import { MATERIAL_TYPES, defaultProps, propTypes } from './static'

import './index.scss'

export function Icon({
    children,
    size,
    svg,
    icon,
    onClick,
    clickable = !!onClick,
    iconType,
    ...otherProps
}) {
    const { className, ...props } = useGridify({
        componentName: 'Icon',
        ...otherProps,
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
        clickable && 'pointer',
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

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
