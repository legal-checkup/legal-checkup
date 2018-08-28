import { getActiveQuestion, getQuestionsLength, getResponsesLength } from '.'

describe('selectors', () => {
  describe('getActiveQuestion', () => {
    it('should return the activeQuestion', () => {
      const state = {
        activeQuestion: 1
      }

      expect(getActiveQuestion(state)).toBe(1)
    })

    it('should return undefined when no activeQuestion', () => {
      const state = {}

      expect(getActiveQuestion(state)).toBeUndefined()
    })
  })

  describe('getQuestionsLength', () => {
    it('should return number of questions', () => {
      const state = {
        questions: {
          1: {},
          2: {},
          3: {}
        }
      }

      expect(getQuestionsLength(state)).toBe(3)
    })

    it('should return undefined when questions does not exist', () => {
      const state = {}

      expect(getQuestionsLength(state)).toBeUndefined()
    })

    it('should return 0 when no questions', () => {
      const state = {
        questions: {}
      }

      expect(getQuestionsLength(state)).toBe(0)
    })
  })

  describe('getResponsesLength', () => {
    it('should return number of responses', () => {
      const state = {
        responses: {
          1: 'Yes',
          2: 'No',
          3: "Don't know"
        }
      }

      expect(getResponsesLength(state)).toBe(3)
    })

    it('should return undefined when responses does not exist', () => {
      const state = {}

      expect(getResponsesLength(state)).toBeUndefined()
    })

    it('should return 0 when no responses', () => {
      const state = {
        responses: {}
      }

      expect(getResponsesLength(state)).toBe(0)
    })
  })
})
