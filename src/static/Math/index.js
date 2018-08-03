export const returnNumberOrOne = (number) => {
    return Number.isInteger(number) ? number : 1;
};