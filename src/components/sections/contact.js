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
    width: 250px;
    padding: 40px 0;
    font-size: xx-large;
    text-transform: uppercase;

    @media ${device.mobile} {
        font-size: x-large;
    }
`
const EmailButton = styled.a`
    text-decoration: none;
    border: 1px solid ${palette.medium};
    color: ${palette.medium};
    padding: 10px;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        color: ${palette.dark};
        border: 1px solid ${palette.dark};
    }
`


const Contact = () => (
    <SectionContainer addCSS={sectionContainerCSS}>
        <Container>
            <Title>{titleLabels.contact}</Title>
            <p>Feel free to contact me or say hi!</p>
            <EmailButton href={`mailto:{YAMLData.email}`}>Send an email!</EmailButton>
        </Container>
    </SectionContainer>
);

export default Contact;