import React from 'react'
import styled, { css } from 'styled-components'
import { device, palette, titleLabels } from '../const'
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
        padding: 20px 0;
        padding-left: 10px;
        margin: 25px 0;
    }
`
const Item = styled.div`
    margin-top: 70px;
    padding-left: 60px;
    font-size: 18px;

    @media ${device.mobile} {
        margin-top: 50px;
        padding-left: 20px;
        padding-right: 5px;
        font-size: 16px;
    }

    a {
        text-decoration: none;
        &:hover {
            color: ${palette.light};
            cursor: pointer;
        }
        p {
            font-size: 24px;
            font-weight: bold;
            color: ${palette.bgContrast};
            @media ${device.mobile} {
                font-size: 20px;
            }
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
                        <a href={data.link}><p>{data.title}</p></a>
                        <p>{data.authors}</p>
                        <p><em>{data.loc}</em>{`, ${data.year}`}</p>
                    </Item>
                );
            })}
        </Container>
    </SectionContainer>
);

export default Publication;