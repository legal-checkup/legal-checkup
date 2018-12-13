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

const HomeContainer = styled.section``
HomeContainer.displayName = 'HomeContainer'

const HomeSection = styled.section`
  &:nth-child(odd) {
    background-color: #eeedea;
  }
`
HomeSection.displayName = 'HomeSection'

const HomeTextContainer = styled.div`
  max-width: ${getSectionWidth}px;
  text-align: ${getTextAlign};
  padding: 50px 0;
  margin: 0 auto;

  background: transparent;
`
HomeTextContainer.displayName = 'HomeTextContainer'

export default Section
export { HomeContainer, HomeSection, HomeTextContainer }
