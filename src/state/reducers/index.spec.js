import { rootReducer } from '.'
import { INITIAL_STATE, QUESTION_SELECTED, questionSelected } from '..'

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
  })
})
