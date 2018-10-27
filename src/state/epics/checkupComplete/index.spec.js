import { TestScheduler } from 'rxjs/testing'
import { push } from 'connected-react-router'

import { CHECKUP_COMPLETE, RESULTS_PATH } from '@state/constants'

import checkupCompleteEpic from '.'

jest.mock('connected-react-router', () => ({
  push: jest.fn()
}))

const makeTestScheduler = () =>
  new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected)
    jest.resetAllMocks()
  })

describe('epics:responseReceivedEpic', () => {
  it(`should handle a ${CHECKUP_COMPLETE} action by pushing to the ${RESULTS_PATH}`, () => {
    makeTestScheduler().run(({ hot, cold, expectObservable }) => {
      const action$ = hot('a', {
        a: { type: CHECKUP_COMPLETE }
      })
      const expectedResponse = {
        type: 'PUSH',
        payload: {
          to: RESULTS_PATH
        }
      }

      push.mockReturnValue(expectedResponse)

      const output$ = checkupCompleteEpic(action$)

      expectObservable(output$).toBe('a', {
        a: expectedResponse
      })
    })
  })
})
