import { questionSelected } from '.'
import { QUESTION_SELECTED } from '../'

describe('state:actions', () => {
  describe('questionSelected', () => {
    it(`creates a ${QUESTION_SELECTED} action`, () => {
      const question = 1
      expect(questionSelected(question)).toMatchObject({
        type: QUESTION_SELECTED,
        payload: {
          question
        }
      })
    })
  })
})
