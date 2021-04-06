import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { object, string } from 'prop-types'

import { ArrowLeft } from '../../svg/ArrowLeft'

export const GoBack = ({ className = '', style, to, label }) => {
    const history = useHistory()

    function handleClick() {
        history.goBack()
    }

    const cN = `btn-primary p-16 b-rad-50% ${className}`.trim()

    return (
        <div className='z-index-5'>
            {to ? (
                <Link className={cN} to={to} style={style}>
                    <ArrowLeft />
                    {label}
                </Link>
            ) : (
                <button
                    className={cN}
                    onClick={handleClick}
                    type='button'
                    style={style}
                >
                    <ArrowLeft />
                    {label}
                </button>
            )}
        </div>
    )
}

GoBack.propTypes = {
    className: string,
    label: string,
    to: string,
    style: object,
}

GoBack.defaultProps = {
    className: '',
}

export default GoBack
