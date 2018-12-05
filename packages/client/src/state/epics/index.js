import checkupCompleteEpic from './checkupComplete'
import { combineEpics } from 'redux-observable'
import questionRequestedEpic from './questionRequested'
import responseReceivedEpic from './responseReceived'
import redoRequestedEpic from './redoRequested'

const rootEpic = combineEpics(
  checkupCompleteEpic,
  questionRequestedEpic,
  responseReceivedEpic,
  redoRequestedEpic
)

export default rootEpic
