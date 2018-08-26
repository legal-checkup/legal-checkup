import React from 'react'
import { keysIn, length, map, pipe, sort } from 'ramda'

import { INITIAL_STATE } from '../../state/constants.js'

import {
  StyledAnsweredQuestionNumber,
  StyledActiveQuestionNumber,
  StyledUnansweredQuestionNumber,
  StyledUnlockedQuestionNumber,
  StyledProgressBar
} from '../styled'

const { questions, responses, activeQuestion } = INITIAL_STATE

const compare = (a, b) => a - b

const numericalSort = sort(compare)

const getQuestionNumbers = pipe(keysIn, map(parseInt), numericalSort)
const getKeyCount = pipe(keysIn, length)

export function getNextQuestionNumber (questions, responses) {
  const responseCount = getKeyCount(responses) // get the number of responses with `keysIn` and `length`
  const questionCount = getKeyCount(questions) // get the number of questions
  console.log('logs', questionCount)
  return responseCount < questionCount
    ? responseCount + 1 // return the next number
    : responseCount // return responseCount unchanged
}

const questionNumber = getQuestionNumbers(questions)

// function handleClick (e) {
//  getQuestionNumbers(e) // DON'T WE NEED TO SEND/DISPATCH SOMETHING WHEN WE CLICK ON A QUE NUM?
// }

function getQuestionNumber (
  questionNumber,
  activeQuestion,
  handleClick = qNum => console.log(qNum), // WHAT IS THIS FUNCTION DOING?
  responses
) {
  const clickHandler = handleClick.bind(this, questionNumber) // binds the question number to the first argument

  if (questionNumber === activeQuestion) {
    return (
      <StyledActiveQuestionNumber key={questionNumber} onClick={clickHandler}>
        {questionNumber}
      </StyledActiveQuestionNumber>
    )
  }

  if (questionNumber <= getKeyCount(responses)) {
    return (
      <StyledAnsweredQuestionNumber key={questionNumber} onClick={clickHandler}>
        {questionNumber}
      </StyledAnsweredQuestionNumber>
    )
  }

  if (questionNumber === getNextQuestionNumber(questions, responses)) {
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
  // activeQuestion,
  handleClick
  // // questions,
  // responses
}) {
  const questionNumbers = getQuestionNumbers(questions)
  // console.log("que", handleClick())

  return (
    <StyledProgressBar>
      {map(
        qNum => getQuestionNumber(qNum, activeQuestion, handleClick, responses),
        questionNumbers
      )}
    </StyledProgressBar>
  )
}
