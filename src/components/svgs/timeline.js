import React from 'react';
import { palette } from '../const';

export const TimelineSVG = ({
    idx = 0,
    className = '',
    verticalLength = 40,
}) => {
    const startColor = className.includes('flipHorizontal') ? palette.bgContrastDark : palette.white;
    const stopColor = className.includes('flipHorizontal') ? palette.white : palette.bgContrastDark;
    return (
        <svg version='1.1' className={className} viewBox={`0 0 296.9 ${verticalLength * 2 + 10}`} xmlns='http://www.w3.org/2000/svg' >
            <defs>
                <linearGradient id={`gradient${idx}`} x1='0%' y1='0%' x2='0%' y2='100%'>
                    <stop offset='0%' stopColor={startColor} />
                    <stop offset='100%' stopColor={stopColor} />
                </linearGradient>
            </defs>
            <path
                stroke={`url(#gradient${idx})`}
                d={`M4.17,0v${verticalLength}c0,2.76,2.99,5,6.68,5h274.91c3.69,0,6.68,2.24,6.68,5v${verticalLength}`} />
        </svg>
    );
}