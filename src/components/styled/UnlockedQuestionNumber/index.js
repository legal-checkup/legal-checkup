import styled from 'styled-components'

const UnlockedQuestionNumber = styled.span`
  background-color: #ccc;
  color: ${({ onClick }) => (onClick ? '#000' : 'red')};
  display: inline-block;
  padding: 5px;
`
UnlockedQuestionNumber.displayName = 'StyledUnlockedQuestionNumber'

export default UnlockedQuestionNumber
