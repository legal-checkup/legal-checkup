import { nextQuestion, previousQuestion, testCount } from './actions'
import {
  INITIAL_STATE,
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
  TEST_COUNT
} from './constants'
import rootEpic from './epics'
import { rootReducer } from './reducers'
import {
  getActiveQuestion,
  getCount,
  getCurrentTopic,
  getTestCount
} from './selectors'

export {
  getActiveQuestion,
  getCount,
  getCurrentTopic,
  getTestCount,
  INITIAL_STATE,
  NEXT_QUESTION,
  nextQuestion,
  PREVIOUS_QUESTION,
  previousQuestion,
  rootEpic,
  rootReducer,
  TEST_COUNT,
  testCount
}
