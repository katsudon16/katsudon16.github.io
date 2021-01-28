import React from 'react'
import styled, { css } from 'styled-components'
import { device, palette, titleLabels, getPx } from '../const'
import SectionContainer from '../section'
import YAMLData from '../../content/contact.yaml'
import { SosmedIcons } from '../svgs/sosmed';

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
const SosmedContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    svg {
        display: inline-block;
        fill: ${palette.medium};
        height: 30px;
        width: 30px;
        margin: 0 5px;
        pointer-events: auto;

        &:hover {
            cursor: pointer;
            fill: ${palette.bgContrast};
        }
    }
`
const Contact = () => {
    const sosmeds = ['facebook', 'linkedin', 'github'];
    return (
        <SectionContainer addCSS={sectionContainerCSS} id={titleLabels.contact}>
            <Container>
                <Title>{titleLabels.contact}</Title>
                <EmailButton href={`mailto:${YAMLData.email}`}>Send an email</EmailButton>
                <SosmedContainer>
                    {sosmeds.map((sosmed, i) => {
                        const Icon = SosmedIcons[sosmed];
                        return <Icon key={i} />;
                    })}
                </SosmedContainer>
            </Container>
        </SectionContainer>
    );
}

export default Contact;