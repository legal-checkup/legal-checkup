import { ofType } from 'redux-observable'

import { map, withLatestFrom } from 'rxjs/operators'

import isNextQuestionPermitted from '../../../utilities/isNextQuestionPermitted'
import isPreviousQuestionPermitted from '../../../utilities/isPreviousQuestionPermitted'
import isQuestionPermitted from '../../../utilities/isQuestionPermitted'
import {
  errorQuestionIndexOutOfBounds,
  nextQuestionActivated,
  previousQuestionActivated,
  requestedQuestionActivated
} from '../../actions'
import {
  NEXT_QUESTION_REQUESTED,
  PREVIOUS_QUESTION_REQUESTED,
  QUESTION_REQUESTED
} from '../../constants'
import {
  getActiveQuestionIndex,
  getQuestionCount,
  getResponseCount
} from '../../selectors'

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
    map(([{ payload: { questionIndex } = {}, type }, { checkup }]) => {
      // goDoActiveThing()
      const activeQuestionIndex = getActiveQuestionIndex(checkup)
      const questionCount = getQuestionCount(checkup)
      const responseCount = getResponseCount(checkup)

      switch (type) {
        case NEXT_QUESTION_REQUESTED:
          return isNextQuestionPermitted(
            activeQuestionIndex,
            questionCount,
            responseCount
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
            questionCount,
            responseCount
          )
            ? requestedQuestionActivated(questionIndex)
            : errorQuestionIndexOutOfBounds(questionIndex)
      }
    })
  )

export default questionRequestedEpic
