import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../constants'
import styledMap from 'styled-map'

const Section = styled.section`
  background-color: #eee;
  color: #333;
  ${styledMap('format', {
    [DESKTOP]: `
      padding-bottom: 119px;`,
    [MOBILE]: `
    padding-bottom: 60px;`,
    [TABLET]: `
    padding-bottom: 270px;`
  })}
`
Section.displayName = 'Section'

export default Section
