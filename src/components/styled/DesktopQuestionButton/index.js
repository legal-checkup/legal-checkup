import styled from 'styled-components'

const DesktopQuestionButton = styled.button`
  background-color: #ededed;
  border: none;
  border-radius: 5px 0 0 5px;
  color: ${({ enabled }) => (enabled ? '#000' : '#c0c0c0')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  cursor: pointer;
  height: 42px;
  outline: none;
  width: 48px;
  margin-top: 10px;
`

DesktopQuestionButton.displayName = 'StyledDesktopQuestionButton'

export default DesktopQuestionButton
