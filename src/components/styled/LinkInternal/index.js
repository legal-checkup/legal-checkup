import styled from 'styled-components'

const LinkInternal = styled.a`
  cursor: ${props => (props.active ? 'default' : 'pointer')};
`
LinkInternal.displayName = 'StyledLinkInternal'

export default LinkInternal
