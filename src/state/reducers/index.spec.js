import { rootReducer } from '.'
import {
  INITIAL_STATE,
  nextQuestion,
  NEXT_QUESTION,
  previousQuestion,
  PREVIOUS_QUESTION,
  testCount,
  TEST_COUNT
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

    it(`updates the count on a ${NEXT_QUESTION} action`, () => {
      const count = 0
      const state = { count }

      expect(rootReducer(state, nextQuestion())).toMatchObject({
        count: count + 1
      })
    })

    it(`updates the count on a ${PREVIOUS_QUESTION} action`, () => {
      const count = 1
      const state = { count }

      expect(rootReducer(state, previousQuestion())).toMatchObject({
        count: count - 1
      })
    })

    it(`updates the count on a ${TEST_COUNT} action`, () => {
      const count = 3
      const state = { count }

      expect(rootReducer(state, testCount())).toMatchObject({
        count: count + 1
      })
    })
  })
})
