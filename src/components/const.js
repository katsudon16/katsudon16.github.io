// breakpoints for responsive design
const deviceSize = {
    smallMax: '511px',
    mediumMin: '512px',
    mediumMax: '1007px',
    largeMin: '1008px',
}

export const getPx = (px) => `${px}px`;

export const device = {
    mobile: `(max-width: ${deviceSize.smallMax})`,
    tablet: `(min-width: ${deviceSize.mediumMin}) and (max-width: ${deviceSize.mediumMax})`,
    laptop: `(min-width: ${deviceSize.largeMin})`
}

export const palette = {
    bg: '#031926',
    bgContrast: '#9DF9EA',
    dark: '#156799',
    medium: '#043e61',
    light: '#c0e5fb',
    white: '#FFFFFF',
}

export const titleLabels = {
    timeline: 'experience',
    publication: 'publications',
    contact: 'get in touch?',
}