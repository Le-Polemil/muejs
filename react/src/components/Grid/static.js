import {
    array,
    arrayOf,
    func,
    node,
    number,
    object,
    oneOfType,
    string,
} from 'prop-types'

import { isObject } from '../../utils/typeCheck'

export const propTypes = {
    className: string,
    style: object,
    columnsTemplate: oneOfType([string, number, array, object]),
    rowsTemplate: oneOfType([string, number, array, object]),
    gap: oneOfType([string, number, array, object]),
    colGap: oneOfType([string, number, array, object]),
    rowGap: oneOfType([string, number, array, object]),
    width: oneOfType([string, number, array, object]),
    height: oneOfType([string, number, array, object]),
    children: oneOfType([string, number, arrayOf(node), node, func]),
}

export function getStyle({
    style,
    columnsTemplate,
    rowsTemplate,
    gap,
    rowGap = gap,
    colGap = gap,
    width,
    height,
}) {
    const styles = {}

    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    sizes.forEach(size => {
        const suffix = size !== 'xs' ? `-${size}` : ''

        if (isObject(columnsTemplate)) {
            const trueTemplate = columnsTemplate?.[size]
            if (trueTemplate && trueTemplate !== 'auto') {
                styles[`--template-columns${suffix}`] = trueTemplate
            }
        } else if (
            ['string', 'number'].includes(typeof columnsTemplate) &&
            size === 'xs' &&
            columnsTemplate !== 'auto'
        ) {
            styles[`--template-columns${suffix}`] = columnsTemplate
        }

        if (isObject(rowsTemplate)) {
            const trueTemplate = rowsTemplate?.[size]
            if (trueTemplate && trueTemplate !== 'auto') {
                styles[`--template-columns${suffix}`] = trueTemplate
            }
        } else if (
            ['string', 'number'].includes(typeof rowsTemplate) &&
            size === 'xs' &&
            rowsTemplate !== 'auto'
        ) {
            styles[`--template-rows${suffix}`] = rowsTemplate
        }

        if (isObject(colGap)) {
            const trueCol = colGap?.[size]
            if (trueCol && trueCol !== 'auto') {
                styles[`--col-gap${suffix}`] = trueCol
            }
        } else if (
            ['string', 'number'].includes(typeof colGap) &&
            size === 'xs' &&
            colGap !== 'auto'
        ) {
            styles[`--col-gap${suffix}`] = colGap
        }

        if (isObject(rowGap)) {
            const trueRow = rowGap?.[size]
            if (trueRow && trueRow !== 'auto') {
                styles[`--row-gap${suffix}`] = trueRow
            }
        } else if (
            ['string', 'number'].includes(typeof rowGap) &&
            size === 'xs' &&
            rowGap !== 'auto'
        ) {
            styles[`--row-gap${suffix}`] = rowGap
        }
    })

    return { ...styles, ...style }
}
