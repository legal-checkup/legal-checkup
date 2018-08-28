import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'

import {
  QUESTION_ANSWERED,
  nextQuestion,
  getActiveQuestion,
  getQuestionsLength,
  surveyCompleted
} from '../..'

function checkForQuestionAnsweredEpic (action$, state$) {
  return action$.ofType(QUESTION_ANSWERED).mergeMap(({ payload }) => {
    const activeQuestion = getActiveQuestion(state$.value)
    const questionsLength = getQuestionsLength(state$.value)
    return activeQuestion === questionsLength
      ? Observable.of(surveyCompleted())
      : Observable.of(nextQuestion())
  })
}

export default checkForQuestionAnsweredEpic
