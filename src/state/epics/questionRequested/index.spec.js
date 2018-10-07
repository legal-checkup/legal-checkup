import { of } from 'rxjs'
import { TestScheduler } from 'rxjs/testing'

import {
  ERROR_QUESTION_INDEX_OUT_OF_BOUNDS,
  NEXT_QUESTION_ACTIVATED,
  NEXT_QUESTION_REQUESTED,
  PREVIOUS_QUESTION_ACTIVATED,
  PREVIOUS_QUESTION_REQUESTED,
  QUESTION_REQUESTED,
  REQUESTED_QUESTION_ACTIVATED
} from '@state/constants'
import {
  errorQuestionIndexOutOfBounds,
  nextQuestionActivated,
  previousQuestionActivated,
  requestedQuestionActivated
} from '@state/actions'
import {
  getActiveQuestionIndex,
  getQuestionCount,
  getResponseCount
} from '@state/selectors'
import { state } from '@state/fixtures'

import isNextQuestionPermitted from '@utilities/isNextQuestionPermitted'
import isPreviousQuestionPermitted from '@utilities/isPreviousQuestionPermitted'
import isQuestionPermitted from '@utilities/isQuestionPermitted'

import questionRequestedEpic from '.'

jest.mock('@state/actions', () => ({
  errorQuestionIndexOutOfBounds: jest.fn(),
  nextQuestionActivated: jest.fn(),
  previousQuestionActivated: jest.fn(),
  requestedQuestionActivated: jest.fn()
}))
jest.mock('@state/selectors', () => ({
  getActiveQuestionIndex: jest.fn(),
  getQuestionCount: jest.fn(),
  getResponseCount: jest.fn()
}))
jest.mock('@utilities/isNextQuestionPermitted', () => jest.fn())
jest.mock('@utilities/isPreviousQuestionPermitted', () => jest.fn())
jest.mock('@utilities/isQuestionPermitted', () => jest.fn())

const makeTestScheduler = () =>
  new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected)
    jest.resetAllMocks()
  })

describe('epics:responseReceivedEpic', () => {
  it(`should handle a ${NEXT_QUESTION_REQUESTED} action with either a ${NEXT_QUESTION_ACTIVATED} when next question is permitted otherwise return a ${ERROR_QUESTION_INDEX_OUT_OF_BOUNDS} action`, () => {
    makeTestScheduler().run(({ hot, cold, expectObservable }) => {
      const action$ = hot('ab', {
        a: { type: NEXT_QUESTION_REQUESTED },
        b: { type: NEXT_QUESTION_REQUESTED }
      })
      const activeQuestionIndex = 0
      const state$ = of({ ...state, activeQuestionIndex })
      const expectedSuccessResponse = {
        type: NEXT_QUESTION_ACTIVATED,
        payload: {
          activeQuestionIndex: activeQuestionIndex + 1
        }
      }
      const expectedErrorResponse = {
        type: ERROR_QUESTION_INDEX_OUT_OF_BOUNDS,
        payload: {
          activeQuestionIndex
        }
      }

      isNextQuestionPermitted
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)

      nextQuestionActivated.mockReturnValue(expectedSuccessResponse)

      errorQuestionIndexOutOfBounds.mockReturnValue(expectedErrorResponse)

      const output$ = questionRequestedEpic(action$, state$)

      expectObservable(output$).toBe('ab', {
        a: expectedSuccessResponse,
        b: expectedErrorResponse
      })
    })
  })

  it(`should handle a ${PREVIOUS_QUESTION_REQUESTED} action with either a ${PREVIOUS_QUESTION_ACTIVATED} when next question is permitted otherwise return a ${ERROR_QUESTION_INDEX_OUT_OF_BOUNDS} action`, () => {
    makeTestScheduler().run(({ hot, cold, expectObservable }) => {
      const action$ = hot('ab', {
        a: { type: PREVIOUS_QUESTION_REQUESTED },
        b: { type: PREVIOUS_QUESTION_REQUESTED }
      })
      const activeQuestionIndex = 0
      const state$ = of({ ...state, activeQuestionIndex })
      const expectedSuccessResponse = {
        type: PREVIOUS_QUESTION_ACTIVATED,
        payload: {
          activeQuestionIndex: activeQuestionIndex - 1
        }
      }
      const expectedErrorResponse = {
        type: ERROR_QUESTION_INDEX_OUT_OF_BOUNDS,
        payload: {
          activeQuestionIndex
        }
      }

      isPreviousQuestionPermitted
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)

      previousQuestionActivated.mockReturnValue(expectedSuccessResponse)

      errorQuestionIndexOutOfBounds.mockReturnValue(expectedErrorResponse)

      const output$ = questionRequestedEpic(action$, state$)

      expectObservable(output$).toBe('ab', {
        a: expectedSuccessResponse,
        b: expectedErrorResponse
      })
    })
  })

  it(`should handle a ${QUESTION_REQUESTED} action with either a ${REQUESTED_QUESTION_ACTIVATED} when next question is permitted otherwise return a ${ERROR_QUESTION_INDEX_OUT_OF_BOUNDS} action`, () => {
    makeTestScheduler().run(({ hot, cold, expectObservable }) => {
      const action$ = hot('ab', {
        a: { type: QUESTION_REQUESTED },
        b: { type: QUESTION_REQUESTED }
      })
      const activeQuestionIndex = 0
      const state$ = of({ ...state, activeQuestionIndex })
      const expectedSuccessResponse = {
        type: REQUESTED_QUESTION_ACTIVATED,
        payload: {
          activeQuestionIndex: activeQuestionIndex
        }
      }
      const expectedErrorResponse = {
        type: ERROR_QUESTION_INDEX_OUT_OF_BOUNDS,
        payload: {
          activeQuestionIndex
        }
      }

      isQuestionPermitted.mockReturnValueOnce(true).mockReturnValueOnce(false)

      requestedQuestionActivated.mockReturnValue(expectedSuccessResponse)

      errorQuestionIndexOutOfBounds.mockReturnValue(expectedErrorResponse)

      const output$ = questionRequestedEpic(action$, state$)

      expectObservable(output$).toBe('ab', {
        a: expectedSuccessResponse,
        b: expectedErrorResponse
      })
    })
  })
})
