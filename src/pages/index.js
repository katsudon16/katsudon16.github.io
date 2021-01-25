import React from 'react'
import { Hero, Timeline, Publication, NavBar } from './../components';
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
  </Container>
);

export default Home;
