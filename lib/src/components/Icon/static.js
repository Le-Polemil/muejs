import {
    arrayOf,
    bool,
    func,
    node,
    number,
    oneOf,
    oneOfType,
    string,
} from 'prop-types'

export const MATERIAL_TYPES = ['outlined', 'two-tone', 'round', 'sharp']

export const propTypes = {
    children: oneOfType([string, number, arrayOf(node), node, func]),
    clickable: bool,
    icon: oneOfType([string, node, arrayOf(node)]),
    iconType: oneOf(MATERIAL_TYPES),
    onClick: func,
    size: string,
    svg: bool,
}

export const defaultProps = {
    iconType: 'round',
    size: '',
    svg: false,
}
