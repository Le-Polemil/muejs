import { camelToKebab } from '../utils/stringFormat'
import { getCSSVarForDimension } from '../utils/gridify'

export const useGridify = ({
    col: defaultCol,
    row: defaultRow,
    width = 1,
    height = 1,
    fullWidth = false,
    fullHeight = false,

    className,
    style,
    position,
    justify,
    align,

    show,
    hide,

    shouldTransmitProps,
    selfRowTemplate,
    selfColTemplate,
    componentName,
    ...rest
}) => {
    if ((show !== undefined && !show) || hide) return null

    const isFixed = [position].includes('fixed') ? 'fixed' : ''
    const col = isFixed ? 0 : defaultCol
    const row = isFixed ? 0 : defaultRow

    const type = componentName || 'GridifiedElement'

    // css variables
    const styles = {}
    if (parseInt(width, 10) <= 0 && parseInt(height, 10) <= 0) {
        styles['display'] = 'none'
    } else {
        ;['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].forEach(size => {
            const suffix = size !== 'xs' ? `-${size}` : ''

            styles[`--col${suffix}`] = getCSSVarForDimension({
                dimension: col,
                size,
                defaultValue: 'auto',
            })
            styles[`--row${suffix}`] = getCSSVarForDimension({
                dimension: row,
                size,
                defaultValue: 'auto',
            })
            styles[`--width${suffix}`] = getCSSVarForDimension({
                dimension: fullWidth ? -1 : width,
                size,
                defaultValue: 1,
                getPrefix: wdth => wdth >= 0 && 'span ',
            })
            styles[`--height${suffix}`] = getCSSVarForDimension({
                dimension: fullHeight ? -1 : height,
                size,
                defaultValue: 1,
                getPrefix: hght => hght >= 0 && 'span ',
            })
        })
    }

    const gridElementProps = shouldTransmitProps
        ? { col, row, width, height }
        : {}

    return {
        hide: (show !== undefined && !show) || hide,

        className: [
            camelToKebab(type),
            className,
            justify && `justify-${justify}`,
            align && `align-${align}`,
            isFixed,
        ]
            .filter(e => !!e)
            .join(' '),
        style: { ...styles, ...style },
        ...gridElementProps,
        ...rest,
    }
}

export default useGridify
