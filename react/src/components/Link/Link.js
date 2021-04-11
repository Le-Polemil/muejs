import React from 'react'
import {
    arrayOf,
    oneOfType,
    string,
    number,
    func,
    node,
    object,
} from 'prop-types'

import { useGridify } from '../../hooks'

export const Link = ({
    className,
    componentName,
    children,
    to,
    history,
    ...otherProps
}) => {
    const { className: gridClassName, ...props } = useGridify({
        componentName,
        ...otherProps,
    })

    return (
        <a
            onClick={() =>
                history?.push
                    ? history?.push(to)
                    : console.warn(
                          `history?.push is not defined, can't push to ${to}`
                      )
            }
            className={`${gridClassName ?? ''} pointer flex ${
                className ?? ''
            }`.trim()}
            {...props}
        >
            {typeof children === 'function' ? children() : children}
        </a>
    )
}

Link.propTypes = {
    className: string,
    children: oneOfType([string, number, arrayOf(node), node, func]),
    componentName: string,
    to: string?.isRequired,
    history: object?.isRequired,
}

Link.defaultProps = {
    className: '',
    componentName: 'Link',
}

export default Link
