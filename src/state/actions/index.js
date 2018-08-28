import { NEXT_QUESTION, QUESTION_ANSWERED, SURVEY_COMPLETED } from '..'

export function questionAnswered (question, answer) {
  return {
    type: QUESTION_ANSWERED,
    payload: {
      question,
      answer
    }
  }
}

export function nextQuestion () {
  return {
    type: NEXT_QUESTION
  }
}

export function surveyCompleted () {
  return {
    type: SURVEY_COMPLETED
  }
}
