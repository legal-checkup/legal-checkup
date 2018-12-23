import styled from 'styled-components'

import { MOBILE, WHITE, RED_ACCENT } from '../../../../../constants'

const Checkup = styled.div`
  color: ${({ format }) =>
    format === MOBILE ? `#${WHITE}` : `#${RED_ACCENT}`};
  line-height: 1;
  text-transform: uppercase;
  font-size: inherit;
`
Checkup.displayName = 'Checkup'

export default Checkup
