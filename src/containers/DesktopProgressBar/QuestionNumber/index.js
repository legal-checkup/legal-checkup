import React from 'react'
import { length } from 'ramda'

import {
  StyledAnsweredQuestionNumber,
  StyledActiveQuestionNumber,
  StyledUnansweredQuestionNumber,
  StyledUnlockedQuestionNumber
} from '../../../components/styled'

function getNextQuestionNumber (questionNumbers, responseCount) {
  const questionCount = length(questionNumbers)

  return responseCount < questionCount ? responseCount + 1 : responseCount
}

function getQuestionNumber (
  questionNumber,
  activeQuestion,
  questionNumbers,
  responseCount,
  handleClick
) {
  if (questionNumber === activeQuestion) {
    return (
      <StyledActiveQuestionNumber key={questionNumber} onClick={clickHandler}>
        {questionNumber}
      </StyledActiveQuestionNumber>
    )
  }

  if (questionNumber <= responseCount) {
    return (
      <StyledAnsweredQuestionNumber key={questionNumber} onClick={clickHandler}>
        {questionNumber}
      </StyledAnsweredQuestionNumber>
    )
  }

  if (
    questionNumber === getNextQuestionNumber(questionNumbers, responseCount)
  ) {
    return (
      <StyledUnlockedQuestionNumber key={questionNumber} onClick={clickHandler}>
        {questionNumber}
      </StyledUnlockedQuestionNumber>
    )
  }

  return (
    <StyledUnansweredQuestionNumber key={questionNumber}>
      {questionNumber}
    </StyledUnansweredQuestionNumber>
  )
}

export { getNextQuestionNumber, getQuestionNumber }
