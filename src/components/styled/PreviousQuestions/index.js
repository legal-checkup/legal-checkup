import styled from 'styled-components'

const PreviousQuestions = styled.span`
  background-color: #ccc;
  color: ${props => (props.enabled ? 'green' : 'yellow')};
  cursor: ${props => (props.enabled ? 'pointer' : 'not-allowed')};
  display: inline-block;
  padding: 5px;
  margin: 1px;
  border-radius: 2px;

  &:before {
    content: '<';
  }
`
PreviousQuestions.displayName = 'StyledPreviousQuestions'

export default PreviousQuestions
