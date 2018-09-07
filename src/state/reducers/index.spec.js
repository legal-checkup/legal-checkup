import { rootReducer } from '.'
import {
  INITIAL_STATE,
  QUESTION_SELECTED,
  questionSelected,
  PREVIOUS_QUESTION_REQUESTED,
  previousQuestion,
  NEXT_QUESTION_REQUESTED,
  nextQuestion
} from '..'

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('defaults to the INITIAL_STATE', () => {
      expect(rootReducer(undefined, {})).toMatchObject(INITIAL_STATE)
    })

    it('handles an unknown action type by returning the state unchanged', () => {
      const state = 'state'
      expect(rootReducer(state, {})).toBe(state)
    })

    it(`updates the activeQuestion on a ${QUESTION_SELECTED} action`, () => {
      const activeQuestion = 1
      const expectedQuestion = 2
      const state = { activeQuestion }

      expect(
        rootReducer(state, questionSelected(expectedQuestion))
      ).toMatchObject({
        activeQuestion: expectedQuestion
      })
    })

    it(`updates the activeQuestion on a ${PREVIOUS_QUESTION_REQUESTED} action`, () => {
      const activeQuestion = 2
      const expectedQuestion = 1
      const state = { activeQuestion }

      expect(
        rootReducer(state, previousQuestion(expectedQuestion))
      ).toMatchObject({
        activeQuestion: expectedQuestion
      })
    })

    it(`updates the activeQuestion on a ${NEXT_QUESTION_REQUESTED} action`, () => {
      const activeQuestion = 1
      const expectedQuestion = 2
      const state = { activeQuestion }

      expect(rootReducer(state, nextQuestion(expectedQuestion))).toMatchObject({
        activeQuestion: expectedQuestion
      })
    })
  })
})
