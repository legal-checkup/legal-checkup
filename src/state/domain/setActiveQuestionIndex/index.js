import { getQuestionCount, getResponseCount } from '../../selectors'

// Returns the update state with a new activeQuestionIndex if the index is permitted
// Returns the state unchanged if the index requested is out of bounds
export default function setActiveQuestionIndex (state, activeQuestionIndex) {
  // Can't be less than zero
  // Can't go more than one past the responses
  // Can't exceed the number of questions
  return activeQuestionIndex >= 0 &&
    activeQuestionIndex < getResponseCount(state) + 1 &&
    activeQuestionIndex < getQuestionCount(state)
    ? {
      ...state,
      activeQuestionIndex
    }
    : state
}
