import { string, number, oneOfType, node, arrayOf, bool } from 'prop-types'

export const propTypes = {
    children: oneOfType([string, number, arrayOf(node), node]),
    column: bool,
    reverse: bool,
}

export const defaultProps = {
    column: false,
    reverse: false,
}
