import { keysIn, length } from 'ramda'

import { createSelector } from 'reselect'

function getActiveQuestion ({ activeQuestion }) {
  return activeQuestion
}

function getQuestions ({ questions }) {
  return questions
}

const getQuestionCount = createSelector(getQuestions, questions =>
  length(keysIn(questions))
)

const getCurrentQuestion = createSelector(
  getActiveQuestion,
  getQuestions,
  (activeQuestion, questions) => questions[activeQuestion]
)

export { getActiveQuestion, getQuestions, getQuestionCount, getCurrentQuestion }
