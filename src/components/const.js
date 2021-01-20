// breakpoints for responsive design
const size = {
    smallMax: '640px',
    mediumMax: '1007px',
    largeMin: '1008px',
}

export const device = {
    mobile: `(max-width: ${size.smallMax})`,
    tablet: `(max-width: ${size.mediumMax})`,
    laptop: `(min-width: ${size.largeMin})`
}

// color palette
export const palette = {
    bg: '#031926',
    bgContrast: '#9DF9EA',
    color1: '#98B6B1',
    color2: '#FFFFFF',
}