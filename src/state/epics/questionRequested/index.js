import {
  NEXT_QUESTION_REQUESTED,
  PREVIOUS_QUESTION_REQUESTED,
  QUESTION_REQUESTED
} from '@state/constants'
import {
  errorQuestionIndexOutOfBounds,
  nextQuestionActivated,
  previousQuestionActivated,
  requestedQuestionActivated
} from '@state/actions'
import {
  getActiveQuestionIndex,
  getQuestionCount,
  getResponseCount
} from '@state/selectors'
import { map, withLatestFrom } from 'rxjs/operators'

import isNextQuestionPermitted from '@utilities/isNextQuestionPermitted'
import isPreviousQuestionPermitted from '@utilities/isPreviousQuestionPermitted'
import isQuestionPermitted from '@utilities/isQuestionPermitted'
import { ofType } from 'redux-observable'

// Catch question requested actions and test whether the question is allowed
// If allowed, send the correct 'activated' action to update the state
// If not allowed, send a ERROR_QUESTION_INDEX_OUT_OF_BOUNDS action
const questionRequestedEpic = (action$, state$) =>
  action$.pipe(
    ofType(
      NEXT_QUESTION_REQUESTED,
      PREVIOUS_QUESTION_REQUESTED,
      QUESTION_REQUESTED
    ),
    withLatestFrom(state$),
    map(([{ payload: { questionIndex } = {}, type }, state]) => {
      const activeQuestionIndex = getActiveQuestionIndex(state)
      const questionCount = getQuestionCount(state)
      const responseCount = getResponseCount(state)

      switch (type) {
        case NEXT_QUESTION_REQUESTED:
          return isNextQuestionPermitted(
            activeQuestionIndex,
            responseCount,
            questionCount
          )
            ? nextQuestionActivated(activeQuestionIndex + 1)
            : errorQuestionIndexOutOfBounds(activeQuestionIndex + 1)

        case PREVIOUS_QUESTION_REQUESTED:
          return isPreviousQuestionPermitted(activeQuestionIndex)
            ? previousQuestionActivated(activeQuestionIndex - 1)
            : errorQuestionIndexOutOfBounds(activeQuestionIndex - 1)
        default:
          return isQuestionPermitted(
            activeQuestionIndex,
            responseCount,
            questionCount
          )
            ? requestedQuestionActivated(questionIndex)
            : errorQuestionIndexOutOfBounds(questionIndex)
      }
    })
  )

export default questionRequestedEpic
