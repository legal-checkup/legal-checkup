import styled from 'styled-components'

const NextQuestion = styled.span`
  background-color: #ccc;
  color: ${props => (props.next ? 'green' : 'yellow')};
  cursor: ${props => (props.next ? 'pointer' : 'not-allowed')};
  display: inline-block;
  padding: 5px;
  margin: 1px;
  border-radius: 2px;

  &:before {
    content: '>';
  }
`
NextQuestion.displayName = 'StyledNextQuestion'

export default NextQuestion
