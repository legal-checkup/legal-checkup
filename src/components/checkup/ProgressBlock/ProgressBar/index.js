import styled from 'styled-components'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const getWidth = ({ format }) => {
  switch (format) {
    case DESKTOP:
      return '738px'
    case TABLET:
      return '708px'
    default:
      return '708px'
  }
}

const ProgressBar = styled.nav`
  display: flex;
  width: ${getWidth};
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto ${({ format }) => (format === MOBILE ? '30px' : '40px')} auto;
  padding-top: ${({ format }) => (format === MOBILE ? '30px' : '130px')};
`

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
