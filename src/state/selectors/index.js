import { length, pipe, values } from 'ramda'

export function getActiveQuestion ({ activeQuestion }) {
  return activeQuestion
}

export function getCurrentTopic ({ activeQuestion, questions = {} }) {
  return questions[activeQuestion] && questions[activeQuestion].topic
}

export function getResponses ({ responses }) {
  return responses
}

export function getResponsesLength ({ responses }) {
  return pipe(values, length)(responses)
}
