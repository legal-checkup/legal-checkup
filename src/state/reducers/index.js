import { TEST_COUNT, RECIEVE_QUESTIONS } from '..'

const initialState = {
  count: 0
  // questionsarray
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

// function questionsReducer  (state = initialState, { payload = {}, type}) {
//   switch (type) {
//     case RECEIVE_QUESTIONS:
//       return {
//         ...state,
//         questionsarray
//       }
//     case 'SHOW_ERROR':
//       return 'Oh no an error'
//     default:
//       return state
//   }
// }

export { initialState, rootReducer }
