import React from 'react'
import { object, string } from 'prop-types'

import { useGridify } from '../../hooks'

import { Icon } from '../Icon'
import { Link } from '../Link'

export const GoBack = ({
    className,
    style,
    to,
    label,
    history,
    ...otherProps
}) => {
    function handleClick() {
        if (history?.goBack) {
            history.goBack()
        } else {
            console.warn(
                'history?.goBack is not defined, could not go to previous page'
            )
        }
    }
    const { className: gridClassName, ...props } = useGridify({
        componentName: 'GoBack',
        ...otherProps,
    })

    const cN = `btn-primary p-16 b-rad-50% ${className ?? ''}`.trim()

    return (
        <div className={`z-index-5 ${gridClassName ?? ''}`} {...props}>
            {to ? (
                <Link className={cN} to={to} history={history} style={style}>
                    <Icon icon='arrow_left' />
                    {label}
                </Link>
            ) : (
                <button
                    className={cN}
                    onClick={handleClick}
                    type='button'
                    style={style}
                >
                    <Icon icon='arrow_left' />
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
    history: object?.isRequired,
}

GoBack.defaultProps = {
    className: '',
}

export default GoBack
