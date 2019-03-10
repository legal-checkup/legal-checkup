import styled from 'styled-components'

import { MOBILE, WHITE, TITLE_TEXT } from '../../../../../constants'

const Checkup = styled.div`
  color: ${({ format }) => (format === MOBILE ? `${WHITE}` : `${TITLE_TEXT}`)};
  line-height: 1;
  text-transform: uppercase;
  font-size: inherit;
`
Checkup.displayName = 'StyledCheckup'

export default Checkup
