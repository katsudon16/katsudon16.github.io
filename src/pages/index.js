import React from 'react'
import { Hero, Timeline, Publication } from './../components';
import styled, { css } from 'styled-components'
import "../styles/global.css"

const Home = () => (
  <div>
    <Hero />
    <Timeline />
    <Publication />
  </div>
);

export default Home;
