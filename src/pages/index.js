import React from 'react'
import { Hero, Timeline, Publication, NavBar, Contact } from './../components';
import styled from 'styled-components'
import '../styles/global.scss'

const Container = styled.div`
  min-width: 320px;
`

const Home = () => (
  <Container>
    <NavBar />
    <Hero />
    <Timeline />
    <Publication />
    <Contact />
  </Container>
);

export default Home;
