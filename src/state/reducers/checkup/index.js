import {
  NEXT_QUESTION_ACTIVATED,
  NO,
  NOT_SURE,
  PREVIOUS_QUESTION_ACTIVATED,
  REDO_CHECKUP_CLICKED,
  REQUESTED_QUESTION_ACTIVATED,
  USER_RESPONDED_WITH_NO,
  USER_RESPONDED_WITH_NOT_SURE,
  USER_RESPONDED_WITH_YES,
  YES,
  RESULTS_PATH,
  CHECKUP_COMPLETE,
  CHECKUP_PATH
} from '../../constants'
import setActiveQuestionIndex from '../../domain/setActiveQuestionIndex'
import setQuestionResponse from '../../domain/setQuestionResponse'
import initialState from '../../initialState'

import { navigate } from 'gatsby'

export default function reducer (state = initialState, { payload = {}, type }) {
  console.log(state)

  const { activeQuestionIndex } = payload

  switch (type) {
    // We can do the same thing (set the new activeQuestionIndex) for several actions
    // This permits us to track our actual events in the Redux DevTools without duplicating a lot of code
    case NEXT_QUESTION_ACTIVATED:
    case PREVIOUS_QUESTION_ACTIVATED:
    case REQUESTED_QUESTION_ACTIVATED:
      return setActiveQuestionIndex(state, activeQuestionIndex)

    case USER_RESPONDED_WITH_NO:
      return setQuestionResponse(state, NO) // It is not the job of the response to advance the question!

    case USER_RESPONDED_WITH_NOT_SURE:
      return setQuestionResponse(state, NOT_SURE)

    case USER_RESPONDED_WITH_YES:
      return setQuestionResponse(state, YES)

    case REDO_CHECKUP_CLICKED:
      navigate(CHECKUP_PATH)
      return {
        ...state,
        responses: [],
        activeQuestionIndex: 0
      }

    case CHECKUP_COMPLETE:
      navigate(RESULTS_PATH)
      return {
        ...state
      }

    default:
      return state
  }
}
