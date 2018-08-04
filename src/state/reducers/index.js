import { INITIAL_STATE, NEXT_QUESTION, PREVIOUS_QUESTION, TEST_COUNT } from '..'

function rootReducer (state = INITIAL_STATE, { payload = {}, type }) {
  switch (type) {
    case NEXT_QUESTION:
      return {
        ...state,
        count: state.count + 1
      }
    case PREVIOUS_QUESTION:
      return {
        ...state,
        count: state.count - 1
      }
    case TEST_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}

export { rootReducer }
