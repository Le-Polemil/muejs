export const NumberOrOne = (number) => {
    return Number.isInteger(number) ? number : 1;
};