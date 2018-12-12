
export const scrollTo = ({ target, offset = 0 }) => window.scrollTo({ top: target.offsetTop + offset, behavior: "smooth" });