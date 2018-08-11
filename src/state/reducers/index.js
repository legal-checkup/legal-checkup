import { INITIAL_STATE, NEXT_QUESTION, PREVIOUS_QUESTION } from '..'

function rootReducer (state = INITIAL_STATE, { payload = {}, type }) {
  switch (type) {
    case NEXT_QUESTION:
      return {
        ...state,
        activeQuestion: state.activeQuestion + 1
      }
    case PREVIOUS_QUESTION:
      return {
        ...state,
        activeQuestion: state.activeQuestion - 1
      }
    default:
      return state
  }
}

export { rootReducer }
