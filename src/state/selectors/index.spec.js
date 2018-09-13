import {
  getActiveQuestion,
  getCurrentTopic,
  getQuestions,
  getQuestionsKeys,
  getResponses,
  getResponsesCount
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

  describe('getQuestions', () => {
    it('should return the questions', () => {
      const questions = { 1: {}, 2: {} }
      const state = { questions }

      expect(getQuestions(state)).toMatchObject(questions)
    })

    it('should return undefined if no questions object', () => {
      const state = {}

      expect(getQuestions(state)).toBeUndefined()
    })
  })

  describe('getQuestionKeys', () => {
    it('should return an array of the question keys', () => {
      const expected = [1, 2]
      const questions = { 1: {}, 2: {} }
      const state = { questions }

      expect(getQuestionsKeys(state)).toEqual(expect.arrayContaining(expected))
    })

    it('should return an empty array if no questions object', () => {
      const expected = []
      const state = {}

      expect(getQuestionsKeys(state)).toEqual(expected)
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

  describe('getResponsesCount', () => {
    it('should return the length of the responses', () => {
      const expected = 3
      const responses = { 1: 'Yes', 2: 'No', 3: "Don't know" }
      const state = { responses }

      expect(getResponsesCount(state)).toBe(expected)
    })

    it('should return 0 when no responses', () => {
      const expected = 0
      const responses = {}
      const state = { responses }

      expect(getResponsesCount(state)).toBe(expected)
    })
  })
})
