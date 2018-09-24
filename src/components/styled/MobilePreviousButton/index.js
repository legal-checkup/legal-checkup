import styled from 'styled-components'

const MobilePreviousButton = styled.button`
  background-color: #ededed;
  border: none;
  border-radius: 5px 0 0 5px;
  color: ${({ enabled }) => (enabled ? '#000' : '#c0c0c0')};
  height: 42px;
  outline: none;
  width: 48px;
`
MobilePreviousButton.displayName = 'StyledMobilePreviousButton'

export default MobilePreviousButton
