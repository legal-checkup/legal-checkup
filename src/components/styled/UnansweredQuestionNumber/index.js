import styled from 'styled-components'

const UnansweredQuestionNumber = styled.span`
  background-color: #ccc;
  color: ${({ onClick }) => (onClick ? '#000' : 'red')};
  display: inline-block;
  padding: 5px;
`
UnansweredQuestionNumber.displayName = 'StyledUnansweredQuestionNumber'

export default UnansweredQuestionNumber
