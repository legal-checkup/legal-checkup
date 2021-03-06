import styled from 'styled-components'
import {
  DESKTOP,
  TABLET,
  MOBILE,
  ABOUT_PAGE,
  TERMS_PAGE
} from '../../../constants'
import styledMap from 'styled-map'

const getMaxTextWidth = ({ format }) => {
  return format === DESKTOP || format === TABLET ? '920px' : null
}

const getTextAlign = ({ format, page }) => {
  if (page === ABOUT_PAGE || page === TERMS_PAGE) {
    return 'left'
  }
  return format === DESKTOP || format === TABLET ? 'center' : 'left'
}

const getTextPadding = ({ format }) => {
  return format === DESKTOP ? '50px 0' : '30px'
}

const ContentWrapper = styled.div`
  padding: 0 25px;
  ${styledMap('format', {
    [DESKTOP]: ``
  })}
`
ContentWrapper.displayName = 'StyledContentWrapper'

const Section = styled.section`
  background-color: #eeedea;
  color: #333;
  font-family: 'Museo Sans Cyrl 500', sans-serif;
`
Section.displayName = 'Section'

const PageSection = styled.section`
  &:nth-child(even) {
    background-color: #ffffff;
    padding: 0 25px;
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
export { PageSection, PageTextContainer, ContentWrapper }
