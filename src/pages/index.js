import React from 'react'
import { Hero, Timeline, Publication, NavBar } from './../components';
import styled, { css } from 'styled-components'
import "../styles/global.css"

const Home = () => (
  <div id='test'>
    <NavBar />
    <Hero />
    <Timeline />
    <Publication />
  </div>
);

export default Home;
