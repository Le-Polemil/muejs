import {
    arrayOf,
    func,
    node,
    number,
    object,
    oneOf,
    oneOfType,
    string,
} from 'prop-types'

export const TOP = 'top'
export const BOTTOM = 'bottom'
export const LEFT = 'left'
export const RIGHT = 'right'

export const DIRECTIONS = [TOP, BOTTOM, LEFT, RIGHT]

export const propTypes = {
    id: string,
    className: string,
    containerClassName: string,
    animationDuration: number,
    from: oneOf(DIRECTIONS),
    style: object,
    containerStyle: object,
    children: oneOfType([string, number, arrayOf(node), node, func]),
    onClose: func,
    onValid: func,
    onRefuse: func,
    whileClosing: func,
}

export const defaultProps = {
    className: '',
    containerClassName: '',
    animationDuration: 300,
    from: BOTTOM,
    style: {},
    containerStyle: {},
    onClose: () => undefined,
    onValid: () => undefined,
    onRefuse: () => undefined,
    whileClosing: () => undefined,
}
