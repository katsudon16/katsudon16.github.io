// breakpoints for responsive design
const deviceSize = {
    smallMax: 511,
    mediumMin: 512,
    mediumMax: 1007,
    largeMin: 1008,
}

export const getWindowType = () => {
    const width = window.innerWidth;
    if (width <= deviceSize.smallMax) return 'mobile';
    if (width >= deviceSize.largeMin) return 'laptop';
    return 'tablet';
}

export const getPx = (px) => `${px}px`;

export const device = {
    mobile: `(max-width: ${deviceSize.smallMax}px)`,
    tablet: `(min-width: ${deviceSize.mediumMin}px) and (max-width: ${deviceSize.mediumMax}px)`,
    laptop: `(min-width: ${deviceSize.largeMin}px)`
}

export const palette = {
    bg: '#031926',
    bgContrast: '#9DF9EA',
    bgContrastDark: '#86dbcd',
    dark: '#156799',
    medium: '#043e61',
    light: '#c0e5fb',
    white: '#FFFFFF',
}

export const titleLabels = {
    hero: 'home',
    timeline: 'experience',
    publication: 'publications',
    contact: 'get in touch?',
}