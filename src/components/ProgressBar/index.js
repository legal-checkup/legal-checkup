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
  const questionCount = length(questionNumbers) // get the number of questions

  return responseCount < questionCount
    ? responseCount + 1 // return the next number, where is this responseCount defined?
    : responseCount // return responseCount unchanged
}

function getQuestionNumber (
  questionNumber,
  activeQuestion,
  questionNumbers,
  responseCount,
  handleClick
) {
  const clickHandler =
    Boolean(handleClick) && handleClick.bind(this, questionNumber) // binds the question number to the first argument
  // console.log("what", questionNumber)

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
  // const clickHandlerNext = Boolean(handleClick) && handleClick.bind(this, activeQuestion + 1)
  console.log('some', handleNext) // How can I console log 'enabled' since I can't log it after the below return statement.
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
