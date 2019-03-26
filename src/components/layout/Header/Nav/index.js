import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET, BACKGROUND_NAV } from '../../../../constants'

const Nav = styled.nav`
  display: flex;

  ${styledMap('format', {
    [`${DESKTOP}`]: `
      width: 100%;
      margin-left: 100px;
    `,
    [`${TABLET}`]: `
      margin-left: 100px;
    `,
    [`${MOBILE}`]: `
      padding: 0 3px;
      height: 43px;
      background-color: ${BACKGROUND_NAV};
      align-items: flex-end;
    `
  })};
`
Nav.displayName = 'StyledNav'

export default Nav
