import { RootReducer } from '.'
import { INITIAL_STATE, testCount, TEST_COUNT } from '..'

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('defaults to the INITIAL_STATE', () => {
      expect(rootReducer(undefined, {})).toMatchObject(INITIAL_STATE)
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
