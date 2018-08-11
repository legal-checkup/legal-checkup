import {
  getActiveQuestion,
  getCurrentTopic,
  getResponses,
  getResponsesLength
} from '.'

describe('state:selectors', () => {
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

  describe('getResponses', () => {
    it('should return the responses', () => {
      const responses = { 1: 'Yes', 2: 'No', 3: "Don't know" }
      const state = { responses }

      expect(getResponses(state)).toBe(responses)
    })

    it('should return undefined if no responses', () => {
      const state = {}

      expect(getResponses(state)).toBeUndefined()
    })
  })

  describe('getResponsesLength', () => {
    it('should return the length of the responses', () => {
      const responses = { 1: 'Yes', 2: 'No', 3: "Don't know" }
      const state = { responses }

      expect(getResponsesLength(state)).toBe(3)
    })

    it('should return 0 when no responses', () => {
      const responses = {}
      const state = { responses }

      expect(getResponsesLength(state)).toBe(0)
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
