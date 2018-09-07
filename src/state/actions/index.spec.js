import { questionSelected, previousQuestion, nextQuestion } from '.'
import {
  QUESTION_SELECTED,
  PREVIOUS_QUESTION_REQUESTED,
  NEXT_QUESTION_REQUESTED
} from '../'

describe('state:actions', () => {
  describe('questionSelected', () => {
    it(`creates a ${QUESTION_SELECTED} action`, () => {
      const activeQuestion = 1
      expect(questionSelected(activeQuestion)).toMatchObject({
        type: QUESTION_SELECTED,
        payload: {
          activeQuestion
        }
      })
    })
  })
})

describe('state:actions', () => {
  describe('previousQuestion', () => {
    it(`creates a ${PREVIOUS_QUESTION_REQUESTED} action`, () => {
      expect(previousQuestion()).toMatchObject({
        type: PREVIOUS_QUESTION_REQUESTED
      })
    })
  })
})

describe('state:actions', () => {
  describe('nextQuestion', () => {
    it(`creates a ${NEXT_QUESTION_REQUESTED} action`, () => {
      expect(nextQuestion()).toMatchObject({
        type: NEXT_QUESTION_REQUESTED
      })
    })
  })
})
