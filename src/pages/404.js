import React from 'react';
import { palette } from '../components/const';
import styled from 'styled-components';
import { HomeSVG } from '../components/svgs/navbar';
import '../styles/global.scss';

const Container = styled.div`
    min-width: 320px;
    width: 100%;
    height: 100vh;
    background-color: ${palette.bg};
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    width: 60vh;
    text-align: center;

    h1 {
        font-size: 90px;
        color: ${palette.white};
        font-family: Allura;
    }
    h3 {
        font-size: 30px;
        color: ${palette.bgContrast};
    }
    a {
        #iconHome {
            height: 100px;
            width: 100px;
            stroke: ${palette.white};
            &:hover {
                cursor: pointer;
                stroke: ${palette.bgContrast};
            }
        }
    }
`
const Home = () => (
    <Container>
        <Content>
            <h1>Oops,<br />page not found!</h1>
            <h3>Go back home?</h3>
            <a href='/' aria-label='Go back to home page'><HomeSVG /></a>
        </Content>
    </Container>
);

export default Home;
