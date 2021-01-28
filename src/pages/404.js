import React from 'react'
import { palette } from '../components/const'
import styled from 'styled-components'
import '../styles/global.scss'

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
        font-size: 70px;
        color: ${palette.white};
        font-family: Allura;
    }
`
const Home = () => (
    <Container>
        <Content>
            <h1>Oops,<br />page not found!</h1>
        </Content>
    </Container>
);

export default Home;
