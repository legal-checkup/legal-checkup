import React from 'react'
import { keysIn, length, map, pipe, sort } from 'ramda'

import {
  StyledAnsweredQuestionNumber,
  StyledActiveQuestionNumber,
  StyledUnansweredQuestionNumber,
  StyledUnlockedQuestionNumber,
  StyledProgressBar,
  StyledPreviousQuestions,
  StyledNextQuestion
} from '../styled'

const compare = (a, b) => a - b

const numericalSort = sort(compare)

const getQuestionNumbers = pipe(keysIn, map(parseInt), numericalSort)
const getKeyCount = pipe(keysIn, length)

export function getNextQuestionNumber (questionNumbers, responseCount) {
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
  const clickHandler =
    Boolean(handleClick) && handleClick.bind(this, questionNumber)

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

export default function ProgressBar ({
  activeQuestion,
  handleClick,
  handlePrevious,
  handleNext,
  questions,
  responses
}) {
  const questionNumbers = getQuestionNumbers(questions)
  const responseCount = getKeyCount(responses)
  const checkPrevious = activeQuestion > 1
  const checkNext =
    activeQuestion >= getNextQuestionNumber(questionNumbers, responseCount)

  return (
    <StyledProgressBar>
      {checkPrevious ? (
        <StyledPreviousQuestions enabled onClick={handlePrevious} />
      ) : (
        <StyledPreviousQuestions />
      )}
      {map(
        questionNumber =>
          getQuestionNumber(
            questionNumber,
            activeQuestion,
            questionNumbers,
            responseCount,
            handleClick
          ),
        questionNumbers
      )}
      {checkNext ? (
        <StyledNextQuestion />
      ) : (
        <StyledNextQuestion next onClick={handleNext} />
      )}
    </StyledProgressBar>
  )
}
