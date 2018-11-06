import { NO, YES } from '../../constants'

import setQuestionResponse from './'
import { state } from '../../fixtures'

describe('state:domain', () => {
  describe('setQuestionResponse', () => {
    it.only(
      'adds the correct response to the correct topic in the responses',
      () => {
        const newState = setQuestionResponse(
          {
            ...state,
            checkup: {
              ...state.checkup,
              activeQuestionIndex: 0
            }
          },
          NO
        )
        const newAnswer = newState.checkup.responses[0].questions[0]

        expect(newAnswer).toMatchObject(state.checkup.topics[0].questions[0])
        expect(newAnswer.answer).toBe(NO)
      }
    )

    it('updates the response to the correct topic and question', () => {
      const newState = setQuestionResponse(
        {
          ...state,
          checkup: {
            ...state.checkup,
            activeQuestionIndex: 1
          }
        },
        YES
      )
      const newAnswer = newState.checkup.responses[0].questions[1]

      expect(newAnswer.answer).toBe(YES)
    })
  })
})
