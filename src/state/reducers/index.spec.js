import { rootReducer } from '.'
import {
  INITIAL_STATE,
  nextQuestion,
  NEXT_QUESTION,
  questionAnswered,
  QUESTION_ANSWERED
} from '..'

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('defaults to the INITIAL_STATE', () => {
      expect(rootReducer(undefined, {})).toMatchObject(INITIAL_STATE)
    })

    it('handles an unknown action type by returning the state unchanged', () => {
      const state = 'state'

      expect(rootReducer(state, {})).toBe(state)
    })

    it(`adds the response from the ${QUESTION_ANSWERED} action to the state`, () => {
      const state = {
        responses: {}
      }
      const question = 1
      const answer = 'Yes'
      const action = questionAnswered(question, answer)

      expect(rootReducer(state, action)).toMatchObject({
        responses: { 1: 'Yes' }
      })
    })

    it(`increments the activeQuestion by 1 for the ${NEXT_QUESTION} action`, () => {
      const state = {
        activeQuestion: 1
      }
      const action = nextQuestion()

      expect(rootReducer(state, action)).toMatchObject({
        activeQuestion: 2
      })
    })
  })
})
