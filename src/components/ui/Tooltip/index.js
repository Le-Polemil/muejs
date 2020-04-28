import React from 'react'

import './stylesheet.styl'
import gridify from '../../../hoc/gridify'

export default function UngridifiedTooltip({ children, text, content, tooltip, className, style, ...props }) {
    return (
        <span>
            { children }

            <span className={`tooltip-content ${className}`.trim()} style={style} {...props}>
                {text || content || tooltip}
            </span>
        </span>
    )
}

export const Tooltip = gridify(UngridifiedTooltip, { componentName: 'tooltip' })