import React from 'react'
import { Link } from 'react-router-dom'
import { object, string } from 'prop-types'

import { Home } from '../../svg/Home'

export const GoHome = ({
    btnClass,
    className,
    containerClassName,
    style,
    label,
}) => {
    return (
        <div className={`z-index-5 ${containerClassName}`.trim()}>
            <Link
                to='/'
                className={`${btnClass} p-16 b-rad-50% ${className}`.trim()}
                style={style}
            >
                <Home />
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
}

GoHome.defaultProps = {
    btnClass: 'btn-primary',
    className: '',
    containerClassName: '',
}

export default GoHome
