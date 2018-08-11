import { nextQuestion, previousQuestion } from '.'
import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../'

describe('state:actions', () => {
  describe('nextQuestion', () => {
    it(`creates a ${NEXT_QUESTION} action`, () => {
      expect(nextQuestion()).toMatchObject({
        type: NEXT_QUESTION
      })
    })
  })

  describe('previousQuestion', () => {
    it(`creates a ${PREVIOUS_QUESTION} action`, () => {
      expect(previousQuestion()).toMatchObject({
        type: PREVIOUS_QUESTION
      })
    })
  })
})
