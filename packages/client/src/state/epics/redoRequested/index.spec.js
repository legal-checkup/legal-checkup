import { push } from 'connected-react-router'

import { TestScheduler } from 'rxjs/testing'

import { REDO_CHECKUP_CLICKED, CHECKUP_PATH } from '../../constants'

import redoRequestedEpic from './'

jest.mock('connected-react-router', () => ({
  push: jest.fn()
}))

const makeTestScheduler = () =>
  new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected)
    jest.resetAllMocks()
  })

describe('state:epics', () => {
  describe('redoRequested', () => {
    it(`redirects to the ${CHECKUP_PATH} on ${REDO_CHECKUP_CLICKED} `, () => {
      makeTestScheduler().run(({ hot, cold, expectObservable }) => {
        const action$ = hot('a', {
          a: { type: REDO_CHECKUP_CLICKED }
        })
        const expectedResponse = {
          type: 'PUSH',
          payload: {
            to: CHECKUP_PATH
          }
        }

        push.mockReturnValue(expectedResponse)

        const output$ = redoRequestedEpic(action$)

        expectObservable(output$).toBe('a', {
          a: expectedResponse
        })
      })
    })
  })
})
