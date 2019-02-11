import isQuestionPermitted from '../../../utilities/isQuestionPermitted'
import { getQuestionCount, getResponseCount } from '../../selectors'

// Returns the update state with a new activeQuestionIndex if the index is permitted
// Returns the state unchanged if the index requested is out of bounds
export default function setActiveQuestionIndex (state, activeQuestionIndex) {
  return isQuestionPermitted(
    activeQuestionIndex,
    getQuestionCount(state),
    getResponseCount(state)
  )
    ? {
      ...state,
      activeQuestionIndex
    }
    : state
}
