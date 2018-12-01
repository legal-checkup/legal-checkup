import styled from 'styled-components'

import { MOBILE } from '../../../../../constants'

const Checkup = styled.div`
  color: #b62645;
  color: ${({ format }) => (format === MOBILE ? '#fff' : '#b62645')};
  line-height: 1;
  text-transform: uppercase;
  font-size: inherit;
`
Checkup.displayName = 'Checkup'

export default Checkup
