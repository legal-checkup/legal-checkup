import {
  nextQuestionActivated,
  previousQuestionActivated,
  redoCheckupClicked,
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
  REDO_CHECKUP_CLICKED,
  REQUESTED_QUESTION_ACTIVATED,
  USER_RESPONDED_WITH_NO,
  USER_RESPONDED_WITH_NOT_SURE,
  USER_RESPONDED_WITH_YES,
  YES
} from '../../constants'
import setActiveQuestionIndex from '../../domain/setActiveQuestionIndex'
import setQuestionResponse from '../../domain/setQuestionResponse'
import { state } from '../../fixtures'
import initialState from '../../initialState'

import reducer from './'

jest.mock('../../domain/setActiveQuestionIndex', () => ({
  __esModule: true,
  default: jest.fn()
}))

jest.mock('../../domain/setQuestionResponse', () => ({
  __esModule: true,
  default: jest.fn()
}))

describe('state:reducers', () => {
  describe('checkup', () => {
    it('defaults to the initialState', () => {
      expect(reducer(undefined, { type: 'UNKNOWN' })).toMatchObject(initialState)
    })
    it('returns the state unchanged when called with an unrecognised action', () => {
      expect(reducer(state, {})).toMatchObject(state)
    })

    it(`calls setActiveQuestionIndex with the state and the activeQuestionIndex on ${NEXT_QUESTION_ACTIVATED} actions`, () => {
      const questionIndex = 1

      reducer(state, nextQuestionActivated(questionIndex))

      expect(setActiveQuestionIndex).toHaveBeenCalledWith(state, questionIndex)
    })

    it(`calls setActiveQuestionIndex with the state and the activeQuestionIndex on ${PREVIOUS_QUESTION_ACTIVATED} actions`, () => {
      const questionIndex = 1

      reducer(state, previousQuestionActivated(questionIndex))

      expect(setActiveQuestionIndex).toHaveBeenCalledWith(state, questionIndex)
    })

    it(`calls setActiveQuestionIndex with the state and the activeQuestionIndex on ${REQUESTED_QUESTION_ACTIVATED} actions`, () => {
      const questionIndex = 1

      reducer(state, requestedQuestionActivated(questionIndex))

      expect(setActiveQuestionIndex).toHaveBeenCalledWith(state, questionIndex)
    })

    it(`calls setQuestionResponse with the state, the topicId, the questionId, and a ${NO} answer on ${USER_RESPONDED_WITH_NO} actions`, () => {
      reducer(state, userRespondedWithNo())

      expect(setQuestionResponse).toHaveBeenCalledWith(state, NO)
    })

    it(`calls setQuestionResponse with the state, the topicId, the questionId, and a ${NOT_SURE} answer on ${USER_RESPONDED_WITH_NOT_SURE} actions`, () => {
      reducer(state, userRespondedWithNotSure())

      expect(setQuestionResponse).toHaveBeenCalledWith(state, NOT_SURE)
    })

    it(`calls setQuestionResponse with the state, the topicId, the questionId, and a ${YES} answer on ${USER_RESPONDED_WITH_YES} actions`, () => {
      reducer(state, userRespondedWithYes())

      expect(setQuestionResponse).toHaveBeenCalledWith(state, YES)
    })

    it(`resets the responses to none on ${REDO_CHECKUP_CLICKED} action`, () => {
      const newState = reducer(state, redoCheckupClicked())

      expect(newState.responses).toMatchObject([])
    })

    it(`resets the activeQuestionIndex to zero on ${REDO_CHECKUP_CLICKED} action`, () => {
      const newState = reducer(state, redoCheckupClicked())

      expect(newState.activeQuestionIndex).toBe(0)
    })
  })
})
