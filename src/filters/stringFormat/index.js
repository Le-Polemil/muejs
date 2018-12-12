export const camelToKebab = (string) => {
    return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

export const camelToSnake = (string) => {
    return string.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
};