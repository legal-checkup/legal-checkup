import styled from 'styled-components'
import styledMap from 'styled-map'

import {
  DESKTOP,
  MOBILE,
  TABLET,
  BLACK,
  GREYISH_BROWN
} from '../../../../constants'

const Wrapper = styled.header`
  background-color: ${BLACK};
  display: flex;
  width: 100%;

  ${styledMap('format', {
    [`${DESKTOP}`]: `
      height: 100px;
      flex-direction: row;
      align-items: center;
      border-bottom: 7px solid ${GREYISH_BROWN};
    `,
    [`${TABLET}`]: `
      height: 85px;
      flex-direction: row;
      border-bottom: 7px solid ${GREYISH_BROWN};
      align-items: center;
    `,
    [`${MOBILE}`]: `
      flex-direction: column;
    `
  })};
`
Wrapper.displayName = 'Wrapper'

export default Wrapper
