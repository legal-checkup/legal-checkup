import { QUESTION_SELECTED } from '../constants'

function questionSelected (activeQuestion) {
  return {
    type: QUESTION_SELECTED,
    payload: {
      activeQuestion
    }
  }
}

export { questionSelected }
