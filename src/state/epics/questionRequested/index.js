import {
  NEXT_QUESTION_REQUESTED,
  PREVIOUS_QUESTION_REQUESTED,
  QUESTION_REQUESTED
} from '../../constants'
import {
  errorQuestionIndexOutOfBounds,
  nextQuestionActivated,
  previousQuestionActivated,
  requestedQuestionActivated
} from '../../actions'
import {
  getActiveQuestionIndex,
  getQuestionCount,
  getResponseCount
} from '../../selectors'
import { map, withLatestFrom } from 'rxjs/operators'

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
          // Next question can't move more than one past the responses or past the total number of questions
          return activeQuestionIndex < responseCount &&
            activeQuestionIndex < questionCount - 1
            ? nextQuestionActivated(activeQuestionIndex + 1)
            : errorQuestionIndexOutOfBounds(activeQuestionIndex + 1)

        case PREVIOUS_QUESTION_REQUESTED:
          // Previous question can't go below zero
          return activeQuestionIndex > 0
            ? previousQuestionActivated(activeQuestionIndex - 1)
            : errorQuestionIndexOutOfBounds(activeQuestionIndex - 1)
        default:
          // Specified question can't go past either of the above boundaries
          return questionIndex >= 0 &&
            questionIndex < responseCount &&
            activeQuestionIndex < questionCount - 1
            ? requestedQuestionActivated(questionIndex)
            : errorQuestionIndexOutOfBounds(questionIndex)
      }
    })
  )

export default questionRequestedEpic
