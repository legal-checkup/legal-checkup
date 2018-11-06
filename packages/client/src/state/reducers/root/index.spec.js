import {
  nextQuestionActivated,
  previousQuestionActivated,
  requestedQuestionActivated,
  userRespondedWithNo,
  userRespondedWithNotSure,
  userRespondedWithYes
} from '../../actions'
import {
  NEXT_QUESTION_ACTIVATED,
  NO,
  NOT_SURE,
  PREVIOUS_QUESTION_ACTIVATED,
  REQUESTED_QUESTION_ACTIVATED,
  USER_RESPONDED_WITH_NO,
  USER_RESPONDED_WITH_NOT_SURE,
  USER_RESPONDED_WITH_YES,
  YES
} from '../../constants'
import setActiveQuestionIndex from '../../domain/setActiveQuestionIndex'
import setQuestionResponse from '../../domain/setQuestionResponse'
import { state } from '../../fixtures'

import rootReducer from './'

jest.mock('../../domain/setActiveQuestionIndex', () => ({
  __esModule: true,
  default: jest.fn()
}))

jest.mock('../../domain/setQuestionResponse', () => ({
  __esModule: true,
  default: jest.fn()
}))

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('returns the state unchanged when called with an unrecognised action', () => {
      expect(rootReducer(state, {})).toMatchObject(state)
    })

    it(`calls setActiveQuestionIndex with the state and the activeQuestionIndex on ${NEXT_QUESTION_ACTIVATED} actions`, () => {
      const questionIndex = 1

      rootReducer(state, nextQuestionActivated(questionIndex))

      expect(setActiveQuestionIndex).toHaveBeenCalledWith(state, questionIndex)
    })

    it(`calls setActiveQuestionIndex with the state and the activeQuestionIndex on ${PREVIOUS_QUESTION_ACTIVATED} actions`, () => {
      const questionIndex = 1

      rootReducer(state, previousQuestionActivated(questionIndex))

      expect(setActiveQuestionIndex).toHaveBeenCalledWith(state, questionIndex)
    })

    it(`calls setActiveQuestionIndex with the state and the activeQuestionIndex on ${REQUESTED_QUESTION_ACTIVATED} actions`, () => {
      const questionIndex = 1

      rootReducer(state, requestedQuestionActivated(questionIndex))

      expect(setActiveQuestionIndex).toHaveBeenCalledWith(state, questionIndex)
    })

    it(`calls setQuestionResponse with the state, the topicId, the questionId, and a ${NO} answer on ${USER_RESPONDED_WITH_NO} actions`, () => {
      rootReducer(state, userRespondedWithNo())

      expect(setQuestionResponse).toHaveBeenCalledWith(state, NO)
    })

    it(`calls setQuestionResponse with the state, the topicId, the questionId, and a ${NOT_SURE} answer on ${USER_RESPONDED_WITH_NOT_SURE} actions`, () => {
      rootReducer(state, userRespondedWithNotSure())

      expect(setQuestionResponse).toHaveBeenCalledWith(state, NOT_SURE)
    })

    it(`calls setQuestionResponse with the state, the topicId, the questionId, and a ${YES} answer on ${USER_RESPONDED_WITH_YES} actions`, () => {
      rootReducer(state, userRespondedWithYes())

      expect(setQuestionResponse).toHaveBeenCalledWith(state, YES)
    })
  })
})
