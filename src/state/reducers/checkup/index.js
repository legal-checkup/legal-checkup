import {
  CHECKUP_COMPLETE,
  CHECKUP_PATH,
  NEXT_QUESTION_ACTIVATED,
  NO,
  NOT_SURE,
  PREVIOUS_QUESTION_ACTIVATED,
  QUESTIONS_LOADED,
  REDO_CHECKUP_CLICKED,
  REQUESTED_QUESTION_ACTIVATED,
  RESULTS_PATH,
  USER_RESPONDED_WITH_NO,
  USER_RESPONDED_WITH_NOT_SURE,
  USER_RESPONDED_WITH_YES,
  YES
} from '../../constants'

import initialState from '../../initialState'
import { navigate } from 'gatsby'
import setActiveQuestionIndex from '../../domain/setActiveQuestionIndex'
import setQuestionResponse from '../../domain/setQuestionResponse'
import setTopics from '../../domain/setTopics'

export default function reducer (state = initialState, { payload = {}, type }) {
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

    case QUESTIONS_LOADED:
      return {
        ...state,
        topics: setTopics(payload),
        responses: [],
        activeQuestionIndex: 0
      }

    default:
      return state
  }
}
