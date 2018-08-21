import styled from 'styled-components'

const AnsweredQuestionNumber = styled.span`
  background-color: #ccc;
  color: ${({ onClick }) => (onClick ? '#000' : 'red')};
  display: inline-block;
  padding: 5px;
`
AnsweredQuestionNumber.displayName = 'StyledAnsweredQuestionNumber'

export default AnsweredQuestionNumber
