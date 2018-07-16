import styled from 'styled-components'

const Question = styled.li`
  margin: 0.2rem 0.1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;

  ${({ active, answered, disabled }) => {
    let styles = ''

    if (active) {
      styles += `
        color: whitesmoke;
        background-color: gray;
      `
    }

    if (active || answered) {
      styles += `
        cursor: pointer;
        &:hover {
          background-color: gray;
          color: black;
        }
      `
    }

    if (disabled) {
      styles += `
        color: gray;
      `
    }

    return styles
  }};
`

Question.displayName = 'StyledQuestion'

export default Question
