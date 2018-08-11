import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../constants'

function nextQuestion () {
  return {
    type: NEXT_QUESTION
  }
}

function previousQuestion () {
  return {
    type: PREVIOUS_QUESTION
  }
}

export { nextQuestion, previousQuestion }
