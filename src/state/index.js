import { nextQuestion, questionAnswered } from './actions'
import { INITIAL_STATE, NEXT_QUESTION, QUESTION_ANSWERED } from './constants'
import { rootReducer } from './reducers'

export {
  INITIAL_STATE,
  NEXT_QUESTION,
  QUESTION_ANSWERED,
  rootReducer,
  nextQuestion,
  questionAnswered
}
