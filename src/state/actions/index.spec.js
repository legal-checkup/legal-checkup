import {
  CHECKUP_COMPLETE,
  ERROR_QUESTION_INDEX_OUT_OF_BOUNDS,
  NEXT_QUESTION_ACTIVATED,
  NEXT_QUESTION_REQUESTED,
  PREVIOUS_QUESTION_ACTIVATED,
  PREVIOUS_QUESTION_REQUESTED,
  QUESTION_REQUESTED,
  REDO_CHECKUP_CLICKED,
  REQUESTED_QUESTION_ACTIVATED,
  USER_RESPONDED_WITH_NO,
  USER_RESPONDED_WITH_NOT_SURE,
  USER_RESPONDED_WITH_YES
} from '../constants'

import {
  checkupComplete,
  errorQuestionIndexOutOfBounds,
  nextQuestionActivated,
  nextQuestionRequested,
  previousQuestionActivated,
  previousQuestionRequested,
  questionRequested,
  redoCheckupClicked,
  requestedQuestionActivated,
  userRespondedWithNo,
  userRespondedWithNotSure,
  userRespondedWithYes
} from './'

describe('state:actions', () => {
  describe('checkupComplete', () => {
    it(`creates a ${CHECKUP_COMPLETE} action`, () => {
      expect(checkupComplete()).toMatchObject({
        type: CHECKUP_COMPLETE
      })
    })
  })

  describe('errorQuestionIndexOutOfBounds', () => {
    it(`creates an ${ERROR_QUESTION_INDEX_OUT_OF_BOUNDS} action with the question index requested`, () => {
      const questionIndexRequested = -1

      expect(
        errorQuestionIndexOutOfBounds(questionIndexRequested)
      ).toMatchObject({
        type: ERROR_QUESTION_INDEX_OUT_OF_BOUNDS,
        payload: {
          questionIndexRequested
        }
      })
    })
  })

  describe('nextQuestionActivated', () => {
    it(`creates an ${NEXT_QUESTION_ACTIVATED} action with the new active question index`, () => {
      const activeQuestionIndex = 1

      expect(nextQuestionActivated(activeQuestionIndex)).toMatchObject({
        type: NEXT_QUESTION_ACTIVATED,
        payload: {
          activeQuestionIndex
        }
      })
    })
  })

  describe('nextQuestionRequested', () => {
    it(`creates a ${NEXT_QUESTION_REQUESTED} action`, () => {
      expect(nextQuestionRequested()).toMatchObject({
        type: NEXT_QUESTION_REQUESTED
      })
    })
  })

  describe('previousQuestionActivated', () => {
    it(`creates an ${PREVIOUS_QUESTION_ACTIVATED} action with the new active question index`, () => {
      const activeQuestionIndex = 1

      expect(previousQuestionActivated(activeQuestionIndex)).toMatchObject({
        type: PREVIOUS_QUESTION_ACTIVATED,
        payload: {
          activeQuestionIndex
        }
      })
    })
  })

  describe('previousQuestionRequested', () => {
    it(`creates a ${PREVIOUS_QUESTION_REQUESTED} action`, () => {
      expect(previousQuestionRequested()).toMatchObject({
        type: PREVIOUS_QUESTION_REQUESTED
      })
    })
  })

  describe('questionRequested', () => {
    it(`creates a ${QUESTION_REQUESTED} action with the new question index`, () => {
      const questionIndex = 1

      expect(questionRequested(questionIndex)).toMatchObject({
        type: QUESTION_REQUESTED,
        payload: {
          questionIndex
        }
      })
    })
  })

  describe('requestedQuestionActivated', () => {
    it(`creates an ${REQUESTED_QUESTION_ACTIVATED} action with the new active question index`, () => {
      const activeQuestionIndex = 1

      expect(requestedQuestionActivated(activeQuestionIndex)).toMatchObject({
        type: REQUESTED_QUESTION_ACTIVATED,
        payload: {
          activeQuestionIndex
        }
      })
    })
  })

  describe('userRespondedWithNo', () => {
    it(`creates a ${USER_RESPONDED_WITH_NO} action`, () => {
      expect(userRespondedWithNo()).toMatchObject({
        type: USER_RESPONDED_WITH_NO
      })
    })
  })

  describe('userRespondedWithNotSure', () => {
    it(`creates a ${USER_RESPONDED_WITH_NOT_SURE} action`, () => {
      expect(userRespondedWithNotSure()).toMatchObject({
        type: USER_RESPONDED_WITH_NOT_SURE
      })
    })
  })

  describe('userRespondedWithYes', () => {
    it(`creates a ${USER_RESPONDED_WITH_YES} action`, () => {
      expect(userRespondedWithYes()).toMatchObject({
        type: USER_RESPONDED_WITH_YES
      })
    })
  })

  describe('redoCheckupClicked', () => {
    it(`creates a ${REDO_CHECKUP_CLICKED} action`, () => {
      expect(redoCheckupClicked()).toMatchObject({
        type: REDO_CHECKUP_CLICKED
      })
    })
  })
})
