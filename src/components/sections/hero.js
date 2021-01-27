import React from 'react'
import styled, { css } from 'styled-components'
import SectionContainer from '../section'
import { device, palette } from '../const'

const addBgImage = css`
    height: 100vh;
    background-image: url('bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    max-height: 1200px;

    @media ${device.mobile} {
        height: 65vh;
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
    bottom: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title1 = styled.h2`
    color: ${palette.white};
    margin-bottom: 0;
`
const Title2 = styled.h1`
    color: ${palette.bgContrast};
    font-weight: bold;
    text-align: center;
    font-size: xxx-large;
    margin-top: 10px;
    font-family: Allura;
    font-size: 70px;

    @media ${device.mobile} {
        font-size: 50px;
    }
`
const Paragraph = styled.div`
    color: ${palette.white};
    max-width: 80vw;
    min-width: 300px;
    text-align: center;
`
const Arrow = styled.div`
    border: solid black;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
`

const Hero = () => (
    <SectionContainer addCSS={addBgImage}>
        <Container>
            <TextBox>
                <Title1>Hello, my name is</Title1>
                <Title2>Kathleen Sucipto</Title2>
                <Paragraph>
                I am a Master of Biomedical Informatics student at Harvard Medical School, graduating in March 2021.
                </Paragraph>
            </TextBox>
        </Container>
    </SectionContainer>
);

export default Hero;