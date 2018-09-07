import { getActiveQuestion, getQuestions, getResponses } from '.'

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

  describe('getQuestions', () => {
    it('should return the questions', () => {
      const questions = {
        1: {
          body: 'Is anyone chasing you for money?',
          topic: 'Money Troubles',
          help: 'The fact that someone is chasing you for money',
          resource: 'credit and debt',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-13-credit-and-debt/what-this-chapter-covers-chapter-13/'
        },
        2: {
          body:
            'Do you have payments due or unpaid accounts? E.g. phone / Work and Income / Cash converters / power bills / car loan / gyms',
          topic: 'Money Troubles',
          help: 'Your unpaid accounts or due payments',
          resource: 'credit and debt',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-13-credit-and-debt/what-this-chapter-covers-chapter-13/'
        }
      }
      const state = { questions }
      expect(getQuestions(state)).toBe(questions)
    })
  })
})
