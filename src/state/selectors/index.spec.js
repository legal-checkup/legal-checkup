import { getActiveQuestion, getCount, getTestCount } from '.'

describe('state:selectors', () => {
  describe('getTestCount', () => {
    it('returns the list of completed badges', () => {
      const count = 3
      const state = { rootReducer: { count } }

      expect(getTestCount(state)).toBe(count)
    })

    it('returns undefined if no count value', () => {
      const state = {}

      expect(getTestCount(state)).toBeUndefined()
    })
  })

  describe('getActiveQuestion', () => {
    it('returns the active question', () => {
      const activeQuestion = 1
      const state = { activeQuestion }

      expect(getActiveQuestion(state)).toBe(activeQuestion)
    })

    it('returns undefined if no activeQuestion value', () => {
      const state = {}

      expect(getActiveQuestion(state)).toBeUndefined()
    })
  })

  describe('getCount', () => {
    it('returns the count of answered questions', () => {
      const count = 1
      const state = { count }

      expect(getCount(state)).toBe(count)
    })

    it('returns undefined if no count value', () => {
      const state = {}

      expect(getCount(state)).toBeUndefined()
    })
  })
})
