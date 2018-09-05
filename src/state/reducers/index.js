import {
  INITIAL_STATE,
  QUESTION_SELECTED,
  PREVIOUS_QUESTION_REQUESTED,
  NEXT_QUESTION_REQUESTED
} from '..'

function rootReducer (state = INITIAL_STATE, { payload = {}, type }) {
  const { activeQuestion } = payload

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
      return state.activeQuestion < 28
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
// If the current acive qustion which is 'state.activeqeustion' is not the same as const line 4. If it's > 1 then we're going to set the current acvtivequestion to current activequestion - 1 but if the current activequestion is 1 then we'll just return the state unchanged.
