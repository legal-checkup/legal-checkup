import { QUESTION_SELECTED } from '../constants'

export function questionSelected (questionNumber) {
  return {
    type: QUESTION_SELECTED,
    payload: {
      activeQuestion: questionNumber
    }
  }
}
