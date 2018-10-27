import setActiveQuestionIndex from '.'
import { state } from '../../fixtures'

describe('state:domain', () => {
  describe('setActiveQuestionIndex', () => {
    it('sets the activeQuestionIndex when the index is found in the question list', () => {
      const activeQuestionIndex = 0

      expect(setActiveQuestionIndex(state, activeQuestionIndex)).toMatchObject({
        ...state,
        activeQuestionIndex
      })
    })

    it('returns the state unchanged when the index is not found in the question list', () => {
      const activeQuestionIndex = -1

      expect(setActiveQuestionIndex(state, activeQuestionIndex)).toMatchObject(
        state
      )
    })
  })
})
