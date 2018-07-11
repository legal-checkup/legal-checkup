import { getTestCount } from '.'

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
})
