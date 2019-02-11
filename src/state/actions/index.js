import {
  CHECKUP_COMPLETE,
  ERROR_QUESTION_INDEX_OUT_OF_BOUNDS,
  NEXT_QUESTION_ACTIVATED,
  NEXT_QUESTION_REQUESTED,
  PREVIOUS_QUESTION_ACTIVATED,
  PREVIOUS_QUESTION_REQUESTED,
  QUESTION_REQUESTED,
  REDO_CHECKUP_CLICKED,
  REQUESTED_QUESTION_ACTIVATED,
  USER_RESPONDED_WITH_NO,
  USER_RESPONDED_WITH_NOT_SURE,
  USER_RESPONDED_WITH_YES
} from '../constants'

// All questions have been answered - triggers the results page in the checkupComplete epic
export function checkupComplete () {
  return {
    type: CHECKUP_COMPLETE
  }
}

// The question index requested is out of bounds (< 0 or more than the current responses + 1)
export function errorQuestionIndexOutOfBounds (questionIndexRequested) {
  return {
    type: ERROR_QUESTION_INDEX_OUT_OF_BOUNDS,
    payload: {
      questionIndexRequested
    }
  }
}

// Move to the next question
export function nextQuestionActivated (activeQuestionIndex) {
  return {
    type: NEXT_QUESTION_ACTIVATED,
    payload: {
      activeQuestionIndex
    }
  }
}

// Request the next question - whether we move or error depends on the questionRequested epic
export function nextQuestionRequested () {
  return {
    type: NEXT_QUESTION_REQUESTED
  }
}

// Move to the previous question
export function previousQuestionActivated (activeQuestionIndex) {
  return {
    type: PREVIOUS_QUESTION_ACTIVATED,
    payload: {
      activeQuestionIndex
    }
  }
}

// Request the previous question - whether we move or error depends on the questionRequested epic
export function previousQuestionRequested () {
  return {
    type: PREVIOUS_QUESTION_REQUESTED
  }
}

// Request a specific question - whether we move or error depends on the questionRequested epic
export function questionRequested (questionIndex) {
  return {
    type: QUESTION_REQUESTED,
    payload: {
      questionIndex
    }
  }
}

// Move to the specified question
export function requestedQuestionActivated (activeQuestionIndex) {
  return {
    type: REQUESTED_QUESTION_ACTIVATED,
    payload: {
      activeQuestionIndex
    }
  }
}

// The user gave a NO response
export function userRespondedWithNo () {
  return {
    type: USER_RESPONDED_WITH_NO
  }
}

// The user gave a NOT SURE response
export function userRespondedWithNotSure () {
  return {
    type: USER_RESPONDED_WITH_NOT_SURE
  }
}

// The user gave a YES response
export function userRespondedWithYes () {
  return {
    type: USER_RESPONDED_WITH_YES
  }
}

// The user wants to redo the checkup
export function redoCheckupClicked () {
  return {
    type: REDO_CHECKUP_CLICKED
  }
}
