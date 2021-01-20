import styled from 'styled-components'

const SectionContainer = styled.div`
  width: 100wh;
  display: flex;
  justify-content: center;
  ${props => props.addCSS}
`
export default SectionContainer;