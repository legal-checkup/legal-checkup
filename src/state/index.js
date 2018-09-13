import { questionSelected } from './actions'
import { INITIAL_STATE, QUESTION_SELECTED } from './constants'
import { rootReducer } from './reducers'
import {
  getActiveQuestion,
  getCount,
  getCurrentTopic,
  getQuestions,
  getQuestionsKeys,
  getResponses,
  getResponsesCount
} from './selectors'

export {
  getActiveQuestion,
  getCount,
  getCurrentTopic,
  getQuestions,
  getQuestionsKeys,
  getResponses,
  getResponsesCount,
  INITIAL_STATE,
  QUESTION_SELECTED,
  questionSelected,
  rootReducer
}
