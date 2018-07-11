import { testCount } from './actions'
import { TEST_COUNT } from './constants'
import rootEpic from './epics'
import { initialState, rootReducer } from './reducers'
import { getTestCount } from './selectors'

export {
  getTestCount,
  rootEpic,
  initialState,
  rootReducer,
  TEST_COUNT,
  testCount
}
