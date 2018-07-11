import { TEST_COUNT } from '..'

const initialState = {
  count: 0
}

function rootReducer (state = initialState, { payload = {}, type }) {
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

export { initialState, rootReducer }
