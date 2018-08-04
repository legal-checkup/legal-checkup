import { nextQuestion, previousQuestion, testCount } from '.'
import { NEXT_QUESTION, PREVIOUS_QUESTION, TEST_COUNT } from '../'

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

  describe('testCount', () => {
    it(`creates a ${TEST_COUNT} action`, () => {
      expect(testCount()).toMatchObject({
        type: TEST_COUNT
      })
    })
  })
})
