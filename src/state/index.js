import { questionSelected } from './actions'
import { INITIAL_STATE, QUESTION_SELECTED } from './constants'
import { rootReducer } from './reducers'
import {
  getActiveQuestion,
  getCount,
  getCurrentTopic,
  getQuestions,
  getQuestionsCount,
  getQuestionsKeys,
  getResponses,
  getResponsesCount,
  getTopic
} from './selectors'

export {
  getActiveQuestion,
  getCount,
  getCurrentTopic,
  getQuestions,
  getQuestionsCount,
  getQuestionsKeys,
  getResponses,
  getResponsesCount,
  getTopic,
  INITIAL_STATE,
  QUESTION_SELECTED,
  questionSelected,
  rootReducer
}
