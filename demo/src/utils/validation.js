export function watchArray(watch, array) {
    if (Array.isArray(array)) {
        return array?.map(name => watch(name))
    }
    return []
}

export function requireAtLeastX(array, min = 1, message = 'Requis') {
    if (Array.isArray(array)) {
        const filtered = array.filter(v => !!v)

        if (filtered?.length >= min) {
            return null
        }
    }
    return message
}

export function requireXOrLess(array, max = 1, message = 'Trop sélectionné') {
    if (Array.isArray(array)) {
        const filtered = array.filter(v => !!v)

        if (filtered?.length <= max) {
            return null
        }
    }
    return message
}
