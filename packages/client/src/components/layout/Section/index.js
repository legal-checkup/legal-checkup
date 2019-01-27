import styled from 'styled-components'
import { DESKTOP, TABLET } from '../../../constants'

const getMaxTextWidth = ({ format }) => {
  return format === DESKTOP || format === TABLET ? '920px' : null
}

const getTextAlign = ({ format }) => {
  return format === DESKTOP || format === TABLET ? 'center' : 'left'
}

const getTextPadding = ({ format }) => {
  return format === DESKTOP ? '50px 0' : '30px'
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
  max-width: ${getMaxTextWidth};
  text-align: ${getTextAlign};
  padding: ${getTextPadding};
  margin: 0 auto;

  background: transparent;
`
HomeTextContainer.displayName = 'HomeTextContainer'

export default Section
export { HomeContainer, HomeSection, HomeTextContainer }
