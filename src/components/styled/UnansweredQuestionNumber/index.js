import styled from 'styled-components'

const UnansweredQuestionNumber = styled.span`
  background-color: #ccc;
  color: yellow;
  cursor: not-allowed;
  display: inline-block;
  padding: 5px;
  margin: 1px;
  border-radius: 2px;
`
UnansweredQuestionNumber.displayName = 'StyledUnansweredQuestionNumber'

export default UnansweredQuestionNumber
