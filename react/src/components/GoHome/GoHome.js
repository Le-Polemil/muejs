import React from 'react'
import { object, string } from 'prop-types'

import { useGridify } from '../../hooks'

import { Icon } from '../Icon'
import { Link } from '../Link'

export const GoHome = ({
    btnClass,
    className,
    containerClassName,
    style,
    label,
    history,
    ...otherProps
}) => {
    const { className: gridClassName, ...props } = useGridify({
        componentName: 'GoHome',
        ...otherProps,
    })

    return (
        <div
            className={`z-index-5 ${
                containerClassName ?? ''
            } ${gridClassName}`.trim()}
            {...props}
        >
            <Link
                to='/'
                className={`${btnClass} p-16 b-rad-50% ${className}`.trim()}
                style={style}
                history={history}
            >
                <Icon icon='home' />
                {label}
            </Link>
        </div>
    )
}

GoHome.propTypes = {
    btnClass: string,
    className: string,
    containerClassName: string,
    label: string,
    style: object,
    history: object?.isRequired,
}

GoHome.defaultProps = {
    btnClass: 'btn-primary',
    className: '',
    containerClassName: '',
}

export default GoHome
