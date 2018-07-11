import { initialState, rootReducer } from '.'
import { testCount, TEST_COUNT } from '..'

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('defaults to the initialState', () => {
      expect(rootReducer(undefined, {})).toMatchObject(initialState)
    })

    it('handles an unknown action type by returning the state unchanged', () => {
      const state = 'state'

      expect(rootReducer(state, {})).toBe(state)
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
