import { head, tail } from 'ramda'

import { NO, YES } from '../../constants'
import { state as fullState } from '../../fixtures'
import * as selectors from '../../selectors'

import setQuestionResponse from './'

const { checkup: state } = fullState
const activeQuestion = {
  ...state.topics[0].questions[0],
  topicId: state.topics[0].id
}
const firstTopic = head(state.topics)
const missingActiveTopic = tail(state.topics) // drop first topic
const missingActiveQuestion = [
  {
    ...firstTopic,
    questions: tail(firstTopic.questions) // drop first question
  },
  ...missingActiveTopic
]
const question3 = {
  ...state.topics[0].questions[3],
  topicId: state.topics[0].id
}
const question18 = {
  ...state.topics[4].questions[2],
  topicId: state.topics[4].id
}

selectors.getActiveQuestion = jest.fn()
  .mockReturnValueOnce(undefined) // check activeQuestion guard
  .mockReturnValueOnce(activeQuestion) // normal return
  .mockReturnValueOnce(activeQuestion) // normal return
  .mockReturnValueOnce(question3) // normal return
  .mockReturnValueOnce(question18) // normal return
selectors.getTopics = jest.fn()
  .mockReturnValueOnce(missingActiveTopic) // check topicId guard
  .mockReturnValueOnce(missingActiveQuestion) // check questionIndex guard
  .mockReturnValue(state.topics) // normal return

describe('state:domain', () => {
  describe('setQuestionResponse', () => {
    it('returns the state unchanged if a guard fails', () => {
      expect(setQuestionResponse(state, YES)).toMatchObject(state)
      expect(setQuestionResponse(state, YES)).toMatchObject(state)
      expect(setQuestionResponse(state, YES)).toMatchObject(state)
    })

    it('adds the correct response to a current topic in the responses', () => {
      const newState = setQuestionResponse(
        { ...state, activeQuestionIndex: 3 },
        YES
      )
      const newAnswer = newState.responses[0].questions[3]

      expect(newAnswer).toMatchObject(state.topics[0].questions[3])
      expect(newAnswer.answer).toBe(YES)
    })

    it('adds the correct response to a new topic in the responses', () => {
      const newState = setQuestionResponse(
        { ...state, activeQuestionIndex: 18 },
        NO
      )
      const newAnswer = newState.responses[4].questions[2]

      expect(newAnswer).toMatchObject(state.topics[4].questions[2])
      expect(newAnswer.answer).toBe(NO)
    })
  })
})
