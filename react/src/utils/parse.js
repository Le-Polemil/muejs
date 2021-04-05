import memoize from 'lodash.memoize'

function _tryParse(item) {
    let parsed = typeof item !== 'string' ? JSON.stringify(item) : item

    try {
        parsed = JSON.parse(item)
    } catch (e) {
        return item
    }

    if (parsed instanceof Object && parsed !== null) {
        return parsed
    }

    return undefined
}

export const tryParse = memoize(_tryParse)
