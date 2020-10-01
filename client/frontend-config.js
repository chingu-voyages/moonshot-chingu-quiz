const sizesRaw = {
    maxWidth: 1440,
    xs: 375,
    md: 600,
    lg: 900,
    xl: 1200
};

const sizes = {
    maxWidth: `${sizesRaw.maxWidth}px`,
    xs: `${sizesRaw.xs}px`,
    md: `${sizesRaw.md}px`,
    lg: `${sizesRaw.lg}px`,
    xl: `${sizesRaw.xl}px`
};
const breakpoint = size => {
    return sizes[size];
};

const breakpointsRaw = size => {
    return sizesRaw[size];
};

export { breakpoint, breakpointsRaw };