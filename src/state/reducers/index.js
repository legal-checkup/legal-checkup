import { INITIAL_STATE, QUESTION_SELECTED } from '..'

function rootReducer (state = INITIAL_STATE, { payload = {}, type }) {
  const { activeQuestion } = payload

  switch (type) {
    case QUESTION_SELECTED:
      return {
        ...state,
        activeQuestion
      }
    default:
      return state
  }
}

export { rootReducer }
