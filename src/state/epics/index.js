import { combineEpics } from 'redux-observable'

import checkForQuestionAnsweredEpic from './checkForQuestionAnsweredEpic'

export default combineEpics(checkForQuestionAnsweredEpic)
