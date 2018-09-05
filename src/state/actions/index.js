import {
  QUESTION_SELECTED,
  PREVIOUS_QUESTION_REQUESTED,
  NEXT_QUESTION_REQUESTED
} from '../constants'

export function questionSelected (questionNumber) {
  return {
    type: QUESTION_SELECTED,
    payload: {
      activeQuestion: questionNumber
    }
  }
}

export function previousQuestion () {
  return {
    type: PREVIOUS_QUESTION_REQUESTED
  }
}

export function nextQuestiion () {
  return {
    type: NEXT_QUESTION_REQUESTED
  }
}
