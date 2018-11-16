import {
  NEXT_QUESTION_ACTIVATED,
  NO,
  NOT_SURE,
  PREVIOUS_QUESTION_ACTIVATED,
  REQUESTED_QUESTION_ACTIVATED,
  USER_RESPONDED_WITH_NO,
  USER_RESPONDED_WITH_NOT_SURE,
  USER_RESPONDED_WITH_YES,
  YES
} from '../../constants'
import setActiveQuestionIndex from '../../domain/setActiveQuestionIndex'
import setQuestionResponse from '../../domain/setQuestionResponse'
import initialState from '../../initialState'

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
      console.log('No', state)
      return setQuestionResponse(state, NO) // It is not the job of the response to advance the question!

    case USER_RESPONDED_WITH_NOT_SURE:
      return setQuestionResponse(state, NOT_SURE)

    case USER_RESPONDED_WITH_YES:
      return setQuestionResponse(state, YES)

    default:
      return state
  }
}
