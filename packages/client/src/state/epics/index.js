import checkupCompleteEpic from './checkupComplete'
import { combineEpics } from 'redux-observable'
import questionRequestedEpic from './questionRequested'
import responseReceivedEpic from './responseReceived'

const rootEpic = combineEpics(
  checkupCompleteEpic,
  questionRequestedEpic,
  responseReceivedEpic
)

export default rootEpic
