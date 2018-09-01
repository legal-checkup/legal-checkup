import { INITIAL_STATE, QUESTION_SELECTED } from '..'

function rootReducer (state = INITIAL_STATE, { payload = {}, type }) {
  switch (type) {
    case QUESTION_SELECTED:
      return {
        ...state,
        activeQuestion: payload.activeQuestion
      }
    default:
      return state
  }
}

export { rootReducer }
