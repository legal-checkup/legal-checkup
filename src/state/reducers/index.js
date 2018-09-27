import { length, keysIn } from 'ramda'

import {
  initialState,
  QUESTION_SELECTED,
  PREVIOUS_QUESTION_REQUESTED,
  NEXT_QUESTION_REQUESTED
} from '..'

function rootReducer (state = initialState, { payload = {}, type }) {
  const { activeQuestion } = payload
  const total = length(keysIn(state.questions))

  switch (type) {
    case QUESTION_SELECTED:
      return {
        ...state,
        activeQuestion
      }
    case PREVIOUS_QUESTION_REQUESTED:
      return state.activeQuestion > 1
        ? {
          ...state,
          activeQuestion: state.activeQuestion - 1
        }
        : state
    case NEXT_QUESTION_REQUESTED:
      return state.activeQuestion < total
        ? {
          ...state,
          activeQuestion: state.activeQuestion + 1
        }
        : state
    default:
      return state
  }
}

export { rootReducer }
