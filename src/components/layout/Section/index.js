import styled from 'styled-components'
import { DESKTOP, TABLET, ABOUT_PAGE } from '../../../constants'

const getMaxTextWidth = ({ format }) => {
  return format === DESKTOP || format === TABLET ? '920px' : null
}

const getTextAlign = ({ format, page }) => {
  if (page === ABOUT_PAGE) {
    return 'left'
  }
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

const PageSection = styled.section`
  &:nth-child(even) {
    background-color: #eeedea;
  }
`
PageSection.displayName = 'PageSection'

const PageTextContainer = styled.div`
  max-width: ${getMaxTextWidth};
  text-align: ${getTextAlign};
  padding: ${getTextPadding};
  margin: 0 auto;

  background: transparent;
`
PageTextContainer.displayName = 'PageTextContainer'

export default Section
export { PageSection, PageTextContainer }
