import {
    arrayOf,
    bool,
    func,
    node,
    number,
    oneOfType,
    string,
} from 'prop-types'

export const propTypes = {
    children: oneOfType([string, number, arrayOf(node), node, func]),
    column: bool,
    reverse: bool,
}

export const defaultProps = {
    column: false,
    reverse: false,
}
