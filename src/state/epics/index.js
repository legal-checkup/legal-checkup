import { combineEpics } from 'redux-observable'
import questionRequestedEpic from './questionRequested'
import responseReceivedEpic from './responseReceived'

const rootEpic = combineEpics(
  questionRequestedEpic,
  responseReceivedEpic
)

export default rootEpic
