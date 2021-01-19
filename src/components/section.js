import React from 'react'
import styled, { css } from 'styled-components'

const SectionContainer = styled.div`
  text-align: center;
  padding: 20px;

  ${props => props.color && css `
    background-color: #90d68d;
  `}
`
export default SectionContainer;