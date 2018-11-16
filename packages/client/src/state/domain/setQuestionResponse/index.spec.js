import { NO, YES } from '../../constants'
import { state as topState } from '../../fixtures'

import setQuestionResponse from './'

const { checkup: state } = topState

describe('state:domain', () => {
  describe('setQuestionResponse', () => {
    it('adds the correct response to the correct topic in the responses', () => {
      const newState = setQuestionResponse(
        { ...state, activeQuestionIndex: 18 },
        NO
      )
      const newAnswer = newState.responses[4].questions[2]

      expect(newAnswer).toMatchObject(state.topics[4].questions[2])
      expect(newAnswer.answer).toBe(NO)
    })

    it('updates the response to the correct topic and question', () => {
      const newState = setQuestionResponse(
        { ...state, activeQuestionIndex: 1 },
        YES
      )
      const newAnswer = newState.responses[0].questions[1]

      expect(newAnswer.answer).toBe(YES)
    })
  })
})
