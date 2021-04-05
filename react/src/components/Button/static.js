import {
    arrayOf,
    string,
    bool,
    object,
    oneOf,
    oneOfType,
    func,
    number,
    node,
} from 'prop-types'

export const DIRECTIONS = ['top', 'left', 'right', 'bottom']

export const propTypes = {
    aspect: string,
    color: string,
    direction: oneOf(DIRECTIONS),
    type: string,
    disabled: bool,

    className: string,
    style: object,
    onClick: func,
    text: string,
    icon: oneOfType([string, node, arrayOf(node)]),
    children: oneOfType([string, number, arrayOf(node), node, func]),
}

export const defaultProps = {
    aspect: 'filled',
    color: 'primary',
    direction: 'bottom',
    type: 'button',
    disabled: false,

    className: '',
    style: {},
    onClick: () => undefined,
    text: null,
    icon: null,
    children: 'Button',
}
