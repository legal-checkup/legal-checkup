import {
  INITIAL_STATE,
  NO_BUTTON_CLICKED,
  NOT_SURE_BUTTON_CLICKED,
  YES_BUTTON_CLICKED,
  YES,
  NO,
  NOT_SURE
} from '..'

function rootReducer (state = INITIAL_STATE, { payload = {}, type }) {
  switch (type) {
    case NO_BUTTON_CLICKED:
      return {
        ...state,
        responses: {
          ...state.responses,
          [state.activeQuestion]: NO
        },
        activeQuestion: state.activeQuestion + 1
      }
    case NOT_SURE_BUTTON_CLICKED:
      return {
        ...state,
        responses: {
          ...state.responses,
          [state.activeQuestion]: NOT_SURE
        },
        activeQuestion: state.activeQuestion + 1
      }
    case YES_BUTTON_CLICKED:
      return {
        ...state,
        responses: {
          ...state.responses,
          [state.activeQuestion]: YES
        },
        activeQuestion: state.activeQuestion + 1
      }
    default:
      return state
  }
}

export { rootReducer }
