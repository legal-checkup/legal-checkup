import React from 'react'
import { keysIn, length, map, pipe, sort } from 'ramda'

import { INITIAL_STATE } from '../../state/constants.js'

import {
  StyledAnsweredQuestionNumber,
  StyledActiveQuestionNumber,
  StyledUnansweredQuestionNumber,
  StyledUnlockedQuestionNumber
} from '../styled'

const { questions, responses, activeQuestion } = INITIAL_STATE

const compare = (a, b) => a - b

const numericalSort = sort(compare)

const getQuestionNumbers = pipe(keysIn, map(parseInt), numericalSort)

export function getNextQuestionNumber (questions, responses) {
  const responseCount = pipe(keysIn, length)(responses) // get the number of responses with `keysIn` and `length`
  const questionCount = pipe(keysIn, length)(questions) // get the number of questions

  return responseCount < questionCount
    ? responseCount + 1 // return the next number
    : responseCount // return responseCount unchanged
}

const questionNumber = getQuestionNumbers(questions)

function getQuestionNumber (
  questionNumber,
  activeQuestion,
  questions,
  responses,
  handleClick = qNum => console.log(qNum)
) {
  const clickHandler = handleClick.bind(this, questionNumber) // binds the question number to the first argument

  if (questionNumber === activeQuestion) {
    return (
      <StyledActiveQuestionNumber key={questionNumber} onClick={clickHandler()}>
        {questionNumber}
      </StyledActiveQuestionNumber>
    )
  }

  if (questionNumber <= responses) {
    return (
      <StyledAnsweredQuestionNumber
        key={questionNumber}
        onClick={clickHandler()}
      >
        {questionNumber}
      </StyledAnsweredQuestionNumber>
    )
  }

  if (questionNumber === getNextQuestionNumber(questions, responses)) {
    return (
      <StyledUnlockedQuestionNumber
        key={questionNumber}
        onClick={clickHandler()}
      >
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
  // questions,
  responses
}) {
  const questionNumbers = getQuestionNumbers(questions)

  return (
    <nav>
      {map(
        qNum => getQuestionNumber(qNum, activeQuestion, handleClick, responses),
        questionNumbers
      )}
    </nav>
  )
}
