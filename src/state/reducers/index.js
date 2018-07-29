import { INITIAL_STATE, TEST_COUNT } from '..'

function rootReducer (state = INITIAL_STATE, { payload = {}, type }) {
  switch (type) {
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
