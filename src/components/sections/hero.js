import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import SectionContainer from '../section'
import { device, palette, titleLabels } from '../const'

const addBgImage = css`
    height: 100vh;
    background-image: url('bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    max-height: 1280px;

    @media ${device.mobile} {
        max-height: 1000px;
    }
`
const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(3, 25, 38, 0.75);
    display: flex;
    position: relative;
`
const TextBox = styled.div`
    position: absolute;
    bottom: 8vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title1 = styled.div`
    height: 50px;
    margin-bottom: 0;
    width: 100%;
    position: relative;

    h2 {
        width: 90%;
        text-align: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: ${palette.white};
        opacity: 0;
        top: -50px;
        transition: opacity 1s, top 1s;
    }

    &.visible h2 {
        top: 0;
        opacity: 1;
    }
`
const Title2 = styled.div`
    height: 100px;
    margin-top: 10px;
    position: relative;
    width: 100%;
    
    h1 {
        margin: 0;
        width: 90%;
        text-align: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        color: ${palette.bgContrast};
        font-weight: bold;
        font-family: Allura;
        font-size: 70px;
        opacity: 0;
        top: -50px;
        transition: top 1s, opacity 1s;
        
        @media ${device.mobile} {
            font-size: 50px;
        }
    }

    &.visible h1 {
        top: 0;
        opacity: 1;
    }
    
`
const Paragraph = styled.div`
    max-width: 80vw;
    min-width: 300px;
    position: relative;
    text-align: center;
    color: ${palette.white};
    opacity: 0;
    transition: opacity 1s;

    &.visible {
        opacity: 1;
    }
`
const Arrow = styled.div`
    position: absolute;
    bottom: 30px;
    height: 30px;
    width: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: url('arrow.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: bottom 0.3s;

    &:hover {
        cursor: pointer;
        bottom: 20px;
    }

    @media ${device.mobile} {
    }
`
class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otherVisible: false,
            nameVisible: false,
        };
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ otherVisible: true }); }, 500);
        setTimeout(() => { this.setState({ nameVisible: true }); }, 700);
    }
    scrollToTimeline = () => {
        document.getElementById(titleLabels.timeline).scrollIntoView({ behavior: 'smooth' });        
    }
    render() {
        const otherVisible = this.state.otherVisible ? 'visible' : '';
        const nameVisible = this.state.nameVisible ? 'visible' : '';
        return (
            <SectionContainer addCSS={addBgImage} id={titleLabels.hero}>
                <Container>
                    <TextBox>
                        <Title1 className={otherVisible}><h2>Hello, my name is</h2></Title1>
                        <Title2 className={nameVisible}><h1>Kathleen Sucipto</h1></Title2>
                        <Paragraph className={otherVisible}>
                            I am a Master of Biomedical Informatics student at Harvard Medical School, graduating in March 2021.
                        </Paragraph>
                    </TextBox>
                    <Arrow onClick={this.scrollToTimeline} />
                </Container>
            </SectionContainer>
        );
    }
}

export default Hero;