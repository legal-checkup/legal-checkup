import { length, keysIn } from 'ramda'

function getActiveQuestion ({ activeQuestion }) {
  return activeQuestion
}

function getQuestionsLength ({ questions }) {
  return questions && length(keysIn(questions))
}

function getResponsesLength ({ responses }) {
  return responses && length(keysIn(responses))
}

export { getActiveQuestion, getQuestionsLength, getResponsesLength }
