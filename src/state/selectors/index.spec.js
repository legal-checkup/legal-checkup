import { getActiveQuestion, getCount, getCurrentTopic, getTestCount } from '.'

describe('state:selectors', () => {
  describe('getTestCount', () => {
    it('should return the list of completed badges', () => {
      const count = 3
      const state = { rootReducer: { count } }

      expect(getTestCount(state)).toBe(count)
    })

    it('should return undefined if no count value', () => {
      const state = {}

      expect(getTestCount(state)).toBeUndefined()
    })
  })

  describe('getActiveQuestion', () => {
    it('should return the active question', () => {
      const activeQuestion = 1
      const state = { activeQuestion }

      expect(getActiveQuestion(state)).toBe(activeQuestion)
    })

    it('should return undefined if no activeQuestion value', () => {
      const state = {}

      expect(getActiveQuestion(state)).toBeUndefined()
    })
  })

  describe('getCount', () => {
    it('should return the count of answered questions', () => {
      const count = 1
      const state = { count }

      expect(getCount(state)).toBe(count)
    })

    it('should return undefined if no count value', () => {
      const state = {}

      expect(getCount(state)).toBeUndefined()
    })
  })

  describe('getCurrentTopic', () => {
    it('should return undefined if no activeQuestion value', () => {
      const state = {}

      expect(getCurrentTopic(state)).toBeUndefined()
    })

    it('should return undefined if no question topic value', () => {
      const state = { activeQuestion: 1, questions: { 1: { body: 'test' } } }

      expect(getCurrentTopic(state)).toBeUndefined()
    })

    it('should return the topic of the activeQuestion', () => {
      const topic = 'Money'
      const state = { activeQuestion: 1, questions: { 1: { topic } } }

      expect(getCurrentTopic(state)).toBe(topic)
    })
  })
})
