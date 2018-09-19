import { keysIn, length, map, path, pipe } from 'ramda'

import { createSelector } from 'reselect'

const mapKeysToIntegers = pipe(keysIn, map(parseInt))
const countKeys = pipe(keysIn, length)

function getActiveQuestion ({ activeQuestion }) {
  return activeQuestion
}

function getQuestions ({ questions }) {
  return questions
}

function getResponses ({ responses }) {
  return responses
}

function getTopic ({ topic }) {
  return topic
}

function getCurrentTopic ({ activeQuestion, questions = {} }) {
  return path([`${activeQuestion}`, 'topic'], questions)
}

const getQuestionCount = createSelector(getQuestions, countKeys)

const getCurrentQuestion = createSelector(
  getActiveQuestion,
  getQuestions,
  (activeQuestion, questions) => questions[activeQuestion]
)

const getQuestionsKeys = createSelector(getQuestions, mapKeysToIntegers)

const getResponsesCount = pipe(getResponses, keysIn, length)

export {
  getActiveQuestion,
  getCurrentQuestion,
  getCurrentTopic,
  getQuestionCount,
  getQuestions,
  getQuestionsKeys,
  getResponses,
  getResponsesCount,
  getTopic
}
