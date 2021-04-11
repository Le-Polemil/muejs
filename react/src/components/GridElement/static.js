import {
    arrayOf,
    bool,
    element,
    func,
    node,
    number,
    oneOfType,
    string,
} from 'prop-types'

export const propTypes = {
    children: oneOfType([string, number, arrayOf(node), node, func]),
    componentName: string,
    fill: bool,
    type: oneOfType([string, element]),
}

export const defaultProps = {
    componentName: 'GridElement',
    fill: false,
    type: 'div',
}
