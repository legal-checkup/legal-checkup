import styled from 'styled-components'

const DesktopPreviousButton = styled.button`
  background-color: #ededed;
  border: none;
  border-radius: 5px 0 0 5px;
  color: ${({ enabled }) => (enabled ? '#000' : '#c0c0c0')};
  height: 42px;
  outline: none;
  width: 48px;
`
DesktopPreviousButton.displayName = 'StyledDesktopPreviousButton'

export default DesktopPreviousButton
