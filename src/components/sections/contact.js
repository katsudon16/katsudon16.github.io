import React from 'react'
import styled, { css } from 'styled-components'
import { device, palette, titleLabels, getPx } from '../const'
import SectionContainer from '../section'
import YAMLData from '../../content/publication.yaml'

const sectionContainerCSS = css`
    background-color: ${palette.white}
`
const Container = styled.div`
    width: 80vw;
    min-width: 300px;
    max-width: 1000px;
    padding-top: 40px;
    padding-bottom: 70px;
    text-align: center;

    p {
        margin-top: 20px;
        text-align: center;
        margin-bottom: 20px;
    }
`
const Title = styled.h1`
    width: 100%;
    text-align: center;
    padding: 40px 0;
    text-transform: capitalize;
    font-family: Allura;
    font-size: 70px;

    @media ${device.mobile} {
        font-size: 50px;
    }
`
const EmailButton = styled.a`
    text-decoration: none;
    border: 1px solid ${palette.medium};
    color: ${palette.medium};
    padding: 10px;
    border-radius: 5px;
    font-size: 25px;

    @media ${device.mobile} {
        font-size: 20px;
    }

    &:hover {
        cursor: pointer;
        color: ${palette.bgContrast};
        border: 1px solid ${palette.bgContrast};
    }
`

const Contact = () => (
    <SectionContainer addCSS={sectionContainerCSS} id={titleLabels.contact}>
        <Container>
            <Title>{titleLabels.contact}</Title>
            <EmailButton href={`mailto:{YAMLData.email}`}>Send an email</EmailButton>
        </Container>
    </SectionContainer>
);

export default Contact;