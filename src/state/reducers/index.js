import { INITIAL_STATE } from '..'

function rootReducer (state = INITIAL_STATE, { payload = {}, type }) {
  switch (type) {
    default:
      return state
  }
}

export { rootReducer }
