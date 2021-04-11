import {
    arrayOf,
    string,
    bool,
    func,
    object,
    oneOf,
    oneOfType,
    number,
    node,
} from 'prop-types'

export const ICON_SIDE = ['left', 'right']
export const ASPECTS = ['filled', 'border', 'text']
export const DIRECTIONS = ['top', 'left', 'right', 'bottom']

export const propTypes = {
    aspect: oneOf(ASPECTS),
    color: string,
    direction: oneOf(DIRECTIONS),
    type: string,
    disabled: bool,

    className: string,
    style: object,
    onClick: func,
    text: string,
    icon: oneOfType([string, node, arrayOf(node)]),
    iconSide: oneOf(ICON_SIDE),
    children: oneOfType([string, number, arrayOf(node), node, func]),
}

export const defaultProps = {
    aspect: 'filled',
    color: 'primary',
    direction: 'bottom',
    type: 'button',
    disabled: false,

    className: '',
    style: null,
    onClick: () => undefined,
    icon: null,
    iconSide: 'right',
    text: 'Button',
}
