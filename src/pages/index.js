import React from 'react'
import { Hero, Timeline, Publication, NavBar, Contact, LoaderPage } from './../components';
import styled from 'styled-components'
import '../styles/global.scss'

const Container = styled.div`
    min-width: 320px;
`
const loaderDuration = 1.5;
const Home = () => (
    <Container>
        <LoaderPage secondWait={loaderDuration} />
        <NavBar secondWait={loaderDuration} />
        <Hero secondWait={loaderDuration} />
        <Timeline />
        <Publication />
        <Contact />
    </Container>
);

export default Home;
