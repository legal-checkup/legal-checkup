import { QUESTION_SELECTED } from '../constants'

function questionSelected (question) {
  return {
    type: QUESTION_SELECTED,
    payload: {
      question
    }
  }
}

export { questionSelected }
