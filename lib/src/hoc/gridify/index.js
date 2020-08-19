import React, { forwardRef } from 'react'

import { camelToKebab } from '../../filters/stringFormat'
import { getCSSVarForDimension } from '../../utils/gridify'

import { ErrorBoundary } from '../errorCatcher'

export function gridify(Component, { forcedProps = {}, componentName } = {}) {
    function getDefaultProps(forcedPropsName, defaultValue = undefined) {
        return forcedProps[forcedPropsName] !== undefined
            ? forcedProps[forcedPropsName]
            : defaultValue
    }

    const GridifiedComponent = forwardRef((props, ref) => {
        let {
            col: defaultCol,
            row: defaultRow,
            width: defaultWidth,
            height: defaultHeight,
            fullwidth,
            fullheight,

            idgrid,
            children,

            className,
            style,
            position,
            justify,
            align,

            show,
            hide,

            ...transmissibleProps
        } = props || {}

        if ((show !== undefined && !show) || hide) return null
        const {
            selfRowTemplate,
            selfColTemplate,
            position: forcedPosition,
            shouldTransmitProps,
            hide: forcedHide,
            show: forcedShow
        } = forcedProps

        if (
            (forcedShow !== undefined && !forcedShow) ||
            (forcedHide !== undefined && forcedHide)
        )
            return null

        const isFixed = [position, forcedPosition].includes('fixed') ? 'fixed' : ''
        const col = isFixed ? 0 : defaultCol
        const row = isFixed ? 0 : defaultRow
        const width = fullwidth ? -1 : defaultWidth
        const height = fullheight ? -1 : defaultHeight

        const type =
            componentName ||
            Component.displayName ||
            `Gridified${Component.name || 'Component'}`
        const classNames = [
            camelToKebab(type),
            className,
            justify && `justify-${justify}`,
            align && `align-${align}`,
            isFixed
        ]
            .filter(e => !!e)
            .join(' ')

        // css variables
        let styles = {}
        if (parseInt(width, 10) <= 0 && parseInt(height, 10) <= 0) {
            styles['display'] = 'none'
        } else {
            ;['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].forEach(size => {
                const suffix = size !== 'xs' ? `-${size}` : ''

                styles[`--col${suffix}`] = getCSSVarForDimension({
                    dimension: col,
                    size,
                    defaultValue: 'auto'
                })
                styles[`--row${suffix}`] = getCSSVarForDimension({
                    dimension: row,
                    size,
                    defaultValue: 'auto'
                })
                styles[`--width${suffix}`] = getCSSVarForDimension({
                    dimension: width,
                    size,
                    defaultValue: 1
                })
                styles[`--height${suffix}`] = getCSSVarForDimension({
                    dimension: height,
                    size,
                    defaultValue: 1
                })
            })
        }
        styles = { ...styles, ...style }

        const gridElementProps = shouldTransmitProps
            ? { col, row, width, height, fullwidth, fullheight }
            : {}

        return (
            <Component
                {...transmissibleProps}
                {...gridElementProps}
                className={classNames}
                style={styles}
                ref={ref}
            >
                {children}
            </Component>
        )
    })

    GridifiedComponent.defaultProps = {
        className: getDefaultProps('className', ''),
        style: getDefaultProps('style', {}),

        col: getDefaultProps('col', 'auto'),
        row: getDefaultProps('row', 'auto'),

        width: getDefaultProps('width', 1),
        height: getDefaultProps('height', 1),

        fullwidth: getDefaultProps('fullwidth', false),
        fullheight: getDefaultProps('fullheight', false)
    }

    return GridifiedComponent
}

export default gridify
