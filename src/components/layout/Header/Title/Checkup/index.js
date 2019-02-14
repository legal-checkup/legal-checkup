import styled from 'styled-components'

import { MOBILE, WHITE, ROUGE } from '../../../../../constants'

const Checkup = styled.div`
  color: ${({ format }) => (format === MOBILE ? `${WHITE}` : `${ROUGE}`)};
  line-height: 1;
  text-transform: uppercase;
  font-size: inherit;
`
Checkup.displayName = 'StyledCheckup'

export default Checkup
