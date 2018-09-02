import { NEXT_QUESTION, QUESTION_ANSWERED, SURVEY_COMPLETED } from '..'

import { nextQuestion, questionAnswered, surveyCompleted } from '.'

describe('state:actions', () => {
  describe('nextQuestion', () => {
    it(`creates a ${NEXT_QUESTION} action`, () => {
      expect(nextQuestion()).toMatchObject({
        type: NEXT_QUESTION
      })
    })
  })

  describe('questionAnswered', () => {
    it(`creates a ${QUESTION_ANSWERED} action`, () => {
      const question = 1
      const answer = 'Yes'

      expect(questionAnswered(question, answer)).toMatchObject({
        type: QUESTION_ANSWERED,
        payload: {
          question,
          answer
        }
      })
    })

    it(`creates an empty ${QUESTION_ANSWERED} action`, () => {
      expect(questionAnswered()).toMatchObject({
        type: QUESTION_ANSWERED
      })
    })
  })

  describe('surveyComplete', () => {
    it(`creates a ${SURVEY_COMPLETED} action`, () => {
      expect(surveyCompleted()).toMatchObject({
        type: SURVEY_COMPLETED
      })
    })
  })
})
