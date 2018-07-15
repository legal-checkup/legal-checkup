import styled from 'styled-components'

const Question = styled.li`
  margin: 0.2rem 0.1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  color: ${({ active }) => (active ? `whitesmoke` : `black`)};
  background-color: ${({ active }) => (active ? `gray` : `inherit`)};
  cursor: ${({ active, answered }) =>
    active || answered ? `pointer` : `default`};

  ${({ active, answered }) => {
    return active || answered
      ? `&:hover {
        background-color: gray;
        color: black;
      }`
      : ``
  }} &:disabled {
    color: gray;
  }
`

Question.displayName = 'StyledQuestion'

export default Question
