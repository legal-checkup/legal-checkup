import React from 'react'
import styled from 'styled-components'
import { times } from 'ramda'

const StyledProgressNav = styled.nav`
  display: flex;
  color: gray;
`

StyledProgressNav.displayName = 'StyledProgressNav'

const StyledProgressBar = styled.div`
  display: flex;
  background-color: gainsboro;
  margin: 0 0.2rem;
`

StyledProgressBar.displayName = 'StyledProgressBar'

const StyledNavButton = styled.button`
  background-color: gainsboro;
  color: gray;
  padding: 0.5rem 1.5rem;
`

StyledNavButton.displayName = 'StyledNavButton'

const NavButtonActive = StyledNavButton.extend`
  color: black;
  cursor: pointer;
  &:hover {
    background-color: darkgray;
  }
`

NavButtonActive.displayName = 'NavButtonActive'

const StyledQuestion = styled.div`
  margin: 0.2rem 0.1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
`

StyledQuestion.displayName = 'StyledQuestion'

const QuestionAnswered = StyledQuestion.extend`
  color: black;
  cursor: pointer;
  &:hover {
    background-color: darkgray;
  }
`

QuestionAnswered.displayName = 'QuestionAnswered'

const QuestionActive = StyledQuestion.extend`
  background-color: gray;
  color: whitesmoke;
  cursor: pointer;
  &:hover {
    background-color: darkgray;
    color: black;
  }
`

QuestionActive.displayName = 'QuestionActive'

function makeQuestions (answered, current, total) {
  return times(idx => {
    const question = ++idx
    if (question === current) {
      return <QuestionActive key={question}>{question}</QuestionActive>
    }

    if (question <= answered) {
      return <QuestionAnswered key={question}>{question}</QuestionAnswered>
    }

    return <StyledQuestion key={question}>{question}</StyledQuestion>
  }, total)
}

export default function ProgressBar ({ answered = 3, current = 2, total = 4 }) {
  const backNav =
    current > 1 ? (
      <NavButtonActive>&lt;</NavButtonActive>
    ) : (
      <StyledNavButton>&lt;</StyledNavButton>
    )
  const forwardNav =
    current < answered ? (
      <NavButtonActive>&gt;</NavButtonActive>
    ) : (
      <StyledNavButton>&gt;</StyledNavButton>
    )
  return (
    <StyledProgressNav>
      {backNav}
      <StyledProgressBar>
        {makeQuestions(answered, current, total)}
      </StyledProgressBar>
      {forwardNav}
    </StyledProgressNav>
  )
}

export {
  StyledNavButton,
  NavButtonActive,
  StyledQuestion,
  QuestionActive,
  QuestionAnswered
}
