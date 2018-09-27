import React from 'react'
import { keysIn, length, map, pipe, sort } from 'ramda'

import { getNextQuestionNumber, getQuestionNumber } from './QuestionNumber'

import {
  StyledProgressBar,
  StyledPreviousQuestions,
  StyledNextQuestion
} from '../styled'

const compare = (a, b) => a - b

const numericalSort = sort(compare)

const getQuestionNumbers = pipe(
  keysIn,
  map(parseInt),
  numericalSort
)
const getKeyCount = pipe(
  keysIn,
  length
)

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
  console.log('new', getQuestionNumber())
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
