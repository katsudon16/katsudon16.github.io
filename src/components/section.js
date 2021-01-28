import styled from 'styled-components'

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${props => props.addCSS}
`
export default SectionContainer;