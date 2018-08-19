import { INITIAL_STATE, NEXT_QUESTION, QUESTION_ANSWERED } from '..'

function rootReducer (state = INITIAL_STATE, { payload = {}, type }) {
  switch (type) {
    case QUESTION_ANSWERED:
      return {
        ...state,
        responses: {
          ...state.responses,
          [payload.question]: payload.answer
        }
      }

    case NEXT_QUESTION:
      return {
        ...state,
        activeQuestion: state.activeQuestion + 1
      }

    default:
      return state
  }
}

export { rootReducer }
