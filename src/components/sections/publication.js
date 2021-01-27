import React from 'react'
import styled, { css } from 'styled-components'
import { device, palette, titleLabels, getPx } from '../const'
import SectionContainer from '../section'
import YAMLData from '../../content/publication.yaml'

const sectionContainerCSS = css`
    background-color: ${palette.bg}
`
const Container = styled.div`
    width: 80vw;
    min-width: 300px;
    max-width: 1000px;
    padding-top: 40px;
    padding-bottom: 70px;
`
const Title = styled.h1`
    width: 250px;
    padding: 40px 0;
    color: ${palette.white};
    text-transform: capitalize;
    font-family: Allura;
    font-size: 70px;

    @media ${device.mobile} {
        font-size: 50px;
    }
`
const Item = styled.div`
    width: 100%;
    margin-top: 70px;
    margin-left: 60px;
    font-size: 18px;

    @media ${device.mobile} {
        margin-left: 20px;
    }

    a {
        font-size: 24px;
        font-weight: bold;
        text-decoration: none;
        color: ${palette.bgContrast};
        &:hover {
            color: ${palette.light};
            cursor: pointer;
        }
    }

    p {
        color: ${palette.white};
    }
`
const Publication = () => (
    <SectionContainer addCSS={sectionContainerCSS} id={titleLabels.publication}>
        <Container>
            <Title>{titleLabels.publication}</Title>
            {YAMLData.content.map((data, i) => {
                return (
                    <Item key={i}>
                        <a href={data.link}>{data.title}</a>
                        <p>{data.authors}</p>
                        <p><em>{data.loc}</em>{`, ${data.year}`}</p>
                    </Item>
                );
            })}
        </Container>
    </SectionContainer>
);

export default Publication;