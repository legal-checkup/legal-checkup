import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

const Content = styled.div`
  background-color: #eeedea;
  ${styledMap('format', {
    [DESKTOP]: `
      padding-bottom: 98px;`,
    [TABLET]: `
      padding-bottom: 100px;`,
    [MOBILE]: `
      padding-bottom: 135px;`
  })}
`
Content.displayName = 'Content'

export default Content
