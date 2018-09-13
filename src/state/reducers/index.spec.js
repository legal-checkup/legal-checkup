import { rootReducer } from '.'
import { INITIAL_STATE } from '..'

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('defaults to the INITIAL_STATE', () => {
      expect(rootReducer(undefined, {})).toMatchObject(INITIAL_STATE)
    })

    it('handles an unknown action type by returning the state unchanged', () => {
      const state = 'state'

      expect(rootReducer(state, {})).toBe(state)
    })

    it('increases the activeQuestion when NO_BUTTON_CLICKED', () => {
      const beforeState = {
        activeQuestion: 1
      }

      const afterState = {
        activeQuestion: 2,
        responses: { 1: 'NO' }
      }

      expect(rootReducer(beforeState, { type: 'NO_BUTTON_CLICKED' })).toBe(
        afterState
      )
    })
  })
})
