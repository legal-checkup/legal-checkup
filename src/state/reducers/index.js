import { contains } from 'ramda'

import { getQuestionsKeys, INITIAL_STATE, QUESTION_SELECTED } from '..'

function isValidQuestionNumber (question, questions) {
  return contains(question, questions)
}

function rootReducer (state = INITIAL_STATE, { payload = {}, type }) {
  switch (type) {
    case QUESTION_SELECTED:
      return isValidQuestionNumber(payload.question, getQuestionsKeys(state))
        ? {
          ...state,
          activeQuestion: payload.question
        }
        : { ...state }
    default:
      return state
  }
}

export { rootReducer }
