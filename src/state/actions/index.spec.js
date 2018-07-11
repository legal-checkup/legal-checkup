import { testCount } from '.'
import { TEST_COUNT } from '../'

describe('state:actions', () => {
  describe('testCount', () => {
    it(`creates a ${TEST_COUNT} action`, () => {
      expect(testCount()).toMatchObject({
        type: TEST_COUNT
      })
    })
  })
})
