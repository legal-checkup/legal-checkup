import styled from 'styled-components'
import { DESKTOP, TABLET } from '../../../constants'

const getSectionWidth = ({ format }) => {
  return format === DESKTOP || format === TABLET ? 920 : 315
}

const getTextAlign = ({ format }) => {
  return format === DESKTOP || format === TABLET ? 'center' : 'left'
}

const Section = styled.section`
  background-color: #eee;
  color: #333;
`
Section.displayName = 'Section'

const Container = styled.section``
Container.displayName = 'Container'

const TopSection = styled.section`
  &:nth-child(odd) {
    background-color: #eeedea;
  }
`
TopSection.displayName = 'TopSection'

const TextContainer = styled.div`
  max-width: ${getSectionWidth}px;
  text-align: ${getTextAlign};
  padding: 50px 0;
  margin: 0 auto;

  background: transparent;
`
TextContainer.displayName = 'TextContainer'

export default Section
export { Container, TopSection, TextContainer }
