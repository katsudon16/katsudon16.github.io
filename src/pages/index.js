import React from 'react'
import { Hero, Timeline, Publication, NavBar } from './../components';
import styled from 'styled-components'
import "../styles/global.css"

const Container = styled.div`
`

const Home = () => (
  <Container>
    <NavBar />
    <Hero />
    <Timeline />
    <Publication />
  </Container>
);

export default Home;
