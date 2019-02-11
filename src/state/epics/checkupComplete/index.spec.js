import { navigate } from 'gatsby'

import { TestScheduler } from 'rxjs/testing'

import { CHECKUP_COMPLETE, RESULTS_PATH } from '../../constants'

import checkupCompleteEpic from './'

jest.mock('connected-react-router', () => ({
  push: jest.fn()
}))

const makeTestScheduler = () =>
  new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected)
    jest.resetAllMocks()
  })

describe('state:epics', () => {
  describe('checkupComplete', () => {
    it(`redirects to the ${RESULTS_PATH} on ${CHECKUP_COMPLETE} `, () => {
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
})
