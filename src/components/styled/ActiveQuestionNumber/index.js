import styled from 'styled-components'

const ActiveQuestionNumber = styled.span`
  background-color: #ccc;
  color: red;
  cursor: pointer;
  display: inline-block;
  padding: 5px;
  margin: 1px;
  border-radius: 2px;
`
ActiveQuestionNumber.displayName = 'StyledActiveQuestionNumber'

export default ActiveQuestionNumber
