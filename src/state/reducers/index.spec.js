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

      const NO_BUTTON_CLICKED = { type: 'NO_BUTTON_CLICKED' }

      expect(JSON.stringify(rootReducer(beforeState, NO_BUTTON_CLICKED))).toBe(
        JSON.stringify(afterState)
      )
    })

    it('increases the activeQuestion when NOT_SURE_BUTTON_CLICKED', () => {
      const beforeState = {
        activeQuestion: 1
      }

      const afterState = {
        activeQuestion: 2,
        responses: { 1: 'NOT_SURE' }
      }

      const NOT_SURE_BUTTON_CLICKED = { type: 'NOT_SURE_BUTTON_CLICKED' }

      expect(
        JSON.stringify(rootReducer(beforeState, NOT_SURE_BUTTON_CLICKED))
      ).toBe(JSON.stringify(afterState))
    })

    it('increases the activeQuestion when YES_BUTTON_CLICKED', () => {
      const beforeState = {
        activeQuestion: 1
      }

      const afterState = {
        activeQuestion: 2,
        responses: { 1: 'YES' }
      }

      const YES_BUTTON_CLICKED = { type: 'YES_BUTTON_CLICKED' }

      expect(JSON.stringify(rootReducer(beforeState, YES_BUTTON_CLICKED))).toBe(
        JSON.stringify(afterState)
      )
    })
  })
})
