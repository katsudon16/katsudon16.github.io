import React, { Component } from 'react'
import SectionContainer from '../section'
import styled, { css } from 'styled-components'
import { device, palette, titleLabels, getPx, deviceSize } from '../const'
import YAMLData from '../../content/experience.yaml'

const containerWidthLaptop = 800;
const containerWidthTablet = 480;
const containerWidthMobile = 300;
const svgAnimationTime = 1.5; // second

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
        animation: draw ${svgAnimationTime}s linear forwards;
    }

    .lastSVG {
        margin-bottom: 100px;
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
    color: ${palette.bg};
    text-transform: capitalize;
    display: table-cell;
    vertical-align: middle;
    z-index: 10;
    font-family: Allura;
    font-size: 70px;

    @media ${device.mobile} {
        font-size: 50px;
        width: 180px;
    }
`
// timeline
const TimelineSVG = ({
    idx = 0,
    className = '',
    verticalLength = 40,
}) => {
    const startColor = className.includes('flipHorizontal') ? palette.dark : palette.white;
    const stopColor = className.includes('flipHorizontal') ? palette.white : palette.dark;
    return (
        <svg version='1.1' className={className} viewBox={`0 0 296.9 ${verticalLength * 2 + 10}`}>
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

const TimelineContainer = styled.div`
    position: relative;
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    align-items: center;

    @media ${device.mobile} {
        margin-top: 110px;
    }
`
const Paragraph = styled.div`
    padding: 5px 10px;
    position: absolute;
    top: ${props => props.top}px;
    width: ${getPx(containerWidthLaptop - 30)};
    opacity: 0;

    @media ${device.mobile} {
        width: ${getPx(containerWidthMobile - 30)};
    }
    
    @media ${device.tablet} {
        width: ${getPx(containerWidthTablet - 30)};
    }

    &.left {
        text-align: left;
        left: 70%;
        transition: opacity 1s, left 1s;

        &.visible {
            opacity: 1;
            left: 20px;

            @media ${device.mobile} {
                left: 10px;
            }
        }
    }

    &.right {
        text-align: right;
        right: 70%;
        transition: opacity 1s, right 1s;

        &.visible {
            opacity: 1;
            right: 20px;

            @media ${device.mobile} {
                right: 10px;
            }
        }
    }

    p, h1 {
        margin-bottom: 0;
        margin-top: 5px;
    }

    .year {
        font-size: xx-large;
        font-family: Allura;

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
        margin-bottom: 25px;

        @media ${device.mobile} {
            font-size: 16px;
            margin-bottom: 5px;
        }

        @media ${device.tablet} {
            font-size: 16px;
            margin-bottom: 10px;
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
    color: ${palette.white};
    margin: 0 2.5px 5px 2.5px;

    @media ${device.mobile} {
        font-size: 14px;
    }
`
const Point = styled.div`
    position: absolute;
    background-color: ${palette.medium};
    border-radius: 50%;
    height: 30px;
    width: 30px;
    z-index: 10;
    box-shadow: 3px 3px 9px #a7aeb3;
    top: ${props => props.top}px;
    opacity: 0;
    transition: opacity ${svgAnimationTime}s;

    @media ${device.mobile} {
        width: 15px;
        height: 15px;
    }

    &.visible {
        opacity: 1;
    }

    &.pointRight {
        right: -3px;

        @media ${device.mobile} {
        }

        @media ${device.tablet} {
            right: -6px;
        }
    }

    &.pointLeft {
        left: -3px;

        @media ${device.mobile} {

        }

        @media ${device.tablet} {
            left: -8px;            
        }
    }
`
class Timeline extends Component {
    constructor(props) {
        super(props);
        const windowType = this.getWindowType();
        this.state = {
            isMobile: windowType === 'mobile',
            isTablet: windowType === 'tablet',
            top: 0,
            lastAnimate: -1,
            animated: YAMLData.content.map((_, i) => false),
        }
    }

    componentDidMount() {
        const div = document.getElementById(titleLabels.timeline);
        this.setState({
            top: div.getBoundingClientRect().top,
        })
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }

    getWindowType = () => {
        const width = window.innerWidth;
        if (width <= deviceSize.smallMax) return 'mobile';
        if (width >= deviceSize.largeMin) return 'laptop';
        return 'tablet';
    }

    handleResize = () => {
        const windowType = this.getWindowType();
        this.setState({
            isMobile: windowType === 'mobile',
            isTablet: windowType === 'tablet',
        });
    }

    handleScroll = () => {
        const updateAnimation = (start, end) => {
            setTimeout(() => {
                let { animated } = this.state;
                animated[start] = true;
                this.setState({
                    animated,
                    lastAnimate: start,
                });
                if (this.state.lastAnimate === YAMLData.content.length - 1) {
                    window.removeEventListener('scroll', this.handleScroll);
                }
                if (start + 1 <= end) {
                    updateAnimation(start + 1, end);
                }
            }, 700);
        }
        
        const currScrollPos = window.pageYOffset;
        const divider = this.state.isMobile ? 3 : 5;
        const counterHeights = YAMLData.content.map((_, i) => this.state.top/divider * (i + 1));
        counterHeights[0] = counterHeights[0] - 100;
        let i = this.state.lastAnimate;
        while (currScrollPos > counterHeights[i+1]) {
            i = i + 1;
        }
        updateAnimation(this.state.lastAnimate + 1, i);
    }

    render() {
        const { isMobile, isTablet } = this.state;
        const svgVerticalLength = isMobile ? 100 : (isTablet ? 65 : 40);
        const pTopInit = isMobile ? 130 : (isTablet ? 140 : 145);
        const svgHeight = isMobile ? 210 : (isTablet ? 225 : 245);
        return (
            <SectionContainer addCSS={sectionContainerCSS} id={titleLabels.timeline}>
                <Container>
                    <Title>{titleLabels.timeline}</Title>
                    <TimelineContainer>
                        <Point top='50' className='pointLeft visible' />
                        {YAMLData.content.map((_, i) => {
                            const flipClass = i % 2 === 1 ? 'flipHorizontal' : '';
                            const lastClass = i === YAMLData.content.length - 1 ? 'lastSVG' : '';
                            const animateClass = this.state.animated[i] && this.state.lastAnimate >= i ? 'animate' : '';
                            return (
                                <TimelineSVG
                                    id={`svg${i}`} key={i} idx={i}
                                    verticalLength={svgVerticalLength}
                                    className={`${flipClass} ${lastClass} ${animateClass}`} />
                            );
                        })}
                        {YAMLData.content.map((data, i) => {
                            const locClass = i % 2 === 0 ? 'right' : 'left';
                            const top = pTopInit + i * svgHeight;
                            const visibleClass = this.state.animated[i] && this.state.lastAnimate >= i ? 'visible' : '';
                            return (
                                <Paragraph key={i} className={`${locClass} ${visibleClass}`} top={top} id={`text${i}`}>
                                    <h1 className='year'>{data.year}</h1>
                                    <p className='desc'>{data.desc}</p>
                                    <p className='loc'>{data.location}</p>
                                    {data.skills && data.skills.map((skill, j) =>
                                        <Skill key={j}>{skill}</Skill>
                                    )}
                                </Paragraph>
                            );
                        })}
                        {YAMLData.content.map((_, i) => {
                            const top = pTopInit + i * svgHeight + 13;
                            const locClass = i % 2 === 0 ? 'pointRight' : 'pointLeft';
                            const visibleClass = this.state.animated[i] && this.state.lastAnimate >= i ? 'visible' : '';
                            return <Point key={i} top={top} className={`${locClass} ${visibleClass}`} id={`point${i}`} />;
                        })}
                    </TimelineContainer>
                </Container>
            </SectionContainer>
        );
    }
}

export default Timeline;