import { nextQuestion, previousQuestion } from './actions'
import { INITIAL_STATE, NEXT_QUESTION, PREVIOUS_QUESTION } from './constants'
import { rootReducer } from './reducers'
import {
  getActiveQuestion,
  getCount,
  getCurrentTopic,
  getResponses,
  getResponsesLength
} from './selectors'

export {
  getActiveQuestion,
  getCount,
  getCurrentTopic,
  getResponses,
  getResponsesLength,
  INITIAL_STATE,
  NEXT_QUESTION,
  nextQuestion,
  PREVIOUS_QUESTION,
  previousQuestion,
  rootReducer
}
