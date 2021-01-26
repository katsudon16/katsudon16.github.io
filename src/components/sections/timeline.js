import React from 'react'
import SectionContainer from '../section'
import styled, { css } from 'styled-components'
import { device, palette, titleLabels } from '../const'
import { useMediaQuery } from 'react-responsive'
import YAMLData from '../../content/experience.yaml'

const containerWidthLaptop = 800;
const containerWidthTablet = 480;
const containerWidthMobile = 300;

const getPx = (px) => `${px}px`;

const sectionContainerCSS = css`
    background-color: ${palette.white}
`

const Container = styled.div`
    width: ${getPx(containerWidthLaptop)};
    max-width: 1000px;
    padding-top: 40px;

    @media ${device.mobile} {
        padding-top: 20px;
        width: ${getPx(containerWidthMobile)};
    }
    @media ${device.tablet} {
        width: ${getPx(containerWidthTablet)};
    }

    path {
        fill: none;
        stroke-width: 3;
        stroke-dasharray: 600px;
        stroke-dashoffset: 600px;
    }

    .flipHorizontal path {
        transform: scale(-1, 1) translate(-99.9%, 0);
    }
    
    .animate path {
        animation: draw 2s linear forwards;
    }
    
    @keyframes draw {
        to {
            stroke-dashoffset: 0;
        }
    }
`
const Title = styled.h1`
    width: 250px;
    padding: 40px 0;
    background-color: white;
    position: absolute;
    background-color: ${palette.white};
    font-size: xx-large;
    color: ${palette.bg};
    text-transform: uppercase;
    display: table-cell;
    vertical-align: middle;
    z-index: 10;

    @media ${device.mobile} {
        font-size: x-large;
        width: 180px;
    }
`
// timeline
const TimelineSVG = ({
    idx = 0,
    className = '',
    verticalLength = 40,
}) => {
    const startColor = className.includes('flipHorizontal') ? palette.dark : palette.light;
    const stopColor = className.includes('flipHorizontal') ? palette.light : palette.dark;
    return (
        <svg version='1.1' className={className} viewBox={`0 0 296.9 ${verticalLength * 2 + 10}`}>
            <defs>
                <linearGradient id={`gradient${idx}`} x1='0%' y1='0%' x2='0%' y2='100%'>
                    <stop offset='0%' stop-color={startColor} />
                    <stop offset='100%' stop-color={stopColor} />
                </linearGradient>
            </defs>
            <path
                stroke={`url(#gradient${idx})`}
                d={`M4.17,0v${verticalLength}c0,2.76,2.99,5,6.68,5h274.91c3.69,0,6.68,2.24,6.68,5v${verticalLength}`} />
        </svg>
    );
}

const TimelineContainer = styled.div`
    position: relative;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    align-items: center;

    @media ${device.mobile} {
        margin-top: 70px;
    }
`
const Paragraph = styled.div`
    padding: 5px 10px;
    position: absolute;
    top: ${props => props.top}px;
    width: ${getPx(containerWidthLaptop - 30)};

    @media ${device.mobile} {
        width: ${getPx(containerWidthMobile - 30)};
    }
    
    @media ${device.tablet} {
        width: ${getPx(containerWidthTablet - 30)};
    }

    &.left {
        text-align: left;
        left: 20px;

        @media ${device.mobile} {
            left: 10px;
        }
    }

    &.right {
        text-align: right;
        right: 20px;

        @media ${device.mobile} {
            right: 10px;
        }
    }

    p, h1 {
        margin-bottom: 0;
        margin-top: 5px;
    }

    .year {
        font-size: xx-large;

        @media ${device.mobile} {
            font-size: x-large;
        }
    }

    .desc {
        font-size: 18px;
        color: ${palette.medium};
        margin-top: 20px;

        @media ${device.tablet} {
            margin-top: 10px;
            font-size: 16px;
        }

        @media ${device.mobile} {
            margin-top: 5px;
            font-size: 16px;
        }
    }

    .loc {
        font-size: 18px;
        color: ${palette.dark};
        font-style: italic;
        margin-bottom: 5px;

        @media ${device.mobile} {
            font-size: 16px;
        }
    }
`
const Skill = styled.div`
    font-size: 15px;
    padding: 5px;
    border: 1px ${palette.medium} solid;
    border-radius: 5px;
    display: inline-block;
    background-color: ${palette.medium};
    color: ${palette.light};
    margin: 0 2.5px 5px 2.5px;

    @media ${device.mobile} {
        font-size: 14px;
    }
`
const Point = styled.div`
    position: absolute;
    background-color: ${palette.color1};
    border-radius: 50%;
    height: 10px;
    width: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    transition: background-color 0.5s;

    &.reached {
        background-color: ${palette.bg}
    }
`
const Timeline = () => {
    const isMobile = useMediaQuery({ query: device.mobile });
    const isTablet = useMediaQuery({ query: device.tablet });
    const svgVerticalLength = isMobile ? 100 : (isTablet ? 65 : 40);
    const pTopInit = isMobile ? 130 : (isTablet ? 140 : 145);
    const svgHeight = isMobile ? 210 : (isTablet ? 225 : 245);
    return (
        <SectionContainer addCSS={sectionContainerCSS}>
            <Container>
                <Title>{titleLabels.timeline}</Title>
                <TimelineContainer>
                    {YAMLData.content.map((_, i) => {
                        const flipClass = i % 2 === 1 ? 'flipHorizontal' : '';
                        return (
                            <TimelineSVG
                                key={i} idx={i} verticalLength={svgVerticalLength}
                                className={`animate ${flipClass}`} />
                        );
                    })}
                    {YAMLData.content.map((data, i) => {
                        const paragraphClass = i % 2 === 0 ? 'right' : 'left';
                        const top = pTopInit + i * svgHeight;
                        return (
                            <Paragraph key={i} className={paragraphClass} top={top}>
                                <h1 className='year'>{data.year}</h1>
                                <p className='desc'>{data.desc}</p>
                                <p className='loc'>{data.location}</p>
                                {data.skills && data.skills.map((skill, j) =>
                                    <Skill key={j}>{skill}</Skill>
                                )}
                            </Paragraph>
                        );
                    })}
                </TimelineContainer>
            </Container>
        </SectionContainer>
    );
}

export default Timeline;