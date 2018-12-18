import styled from 'styled-components'

import { MOBILE } from '../../constants'

const PageHeading = styled.h3`
  font-weight: 900;
  font-size: ${({ format }) => (format === MOBILE ? 22 : 32)}px;
  font-family: 'Museo Sans Cyrl 900', sans-serif;
  text-align: left;

  margin: 0;

  color: #b62645;
`
PageHeading.displayName = 'StyledHeading'

const PageText = styled.p`
  font-weight: 500;
  font-size: ${({ format }) => (format === MOBILE ? 15 : 18)}px;
  font-family: 'Museo Sans Cyrl 500', sans-serif;
  padding-left: 50px;
  padding-right: 50px;
`
PageText.displayName = 'PageText'

export { PageHeading, PageText }
