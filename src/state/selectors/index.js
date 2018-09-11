import { keysIn, length, map, path, pipe } from 'ramda'

function getActiveQuestion ({ activeQuestion }) {
  return activeQuestion
}

function getCurrentTopic ({ activeQuestion, questions = {} }) {
  return path([`${activeQuestion}`, 'topic'], questions)
}

function getQuestions ({ questions }) {
  return questions
}

const getQuestionsKeys = pipe(getQuestions, keysIn, map(parseInt))

function getResponses ({ responses }) {
  return responses
}

function getTopic ({ topic }) {
  return topic
}

const getResponsesCount = pipe(getResponses, keysIn, length)

export {
  getActiveQuestion,
  getCurrentTopic,
  getQuestions,
  getQuestionsKeys,
  getResponses,
  getResponsesCount,
  getTopic
}
