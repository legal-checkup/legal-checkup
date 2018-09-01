import { questionSelected } from '.'
import { QUESTION_SELECTED } from '../'

describe('state:actions', () => {
  describe('questionSelected', () => {
    it(`creates a ${QUESTION_SELECTED} action`, () => {
      const activeQuestion = 1
      expect(questionSelected(activeQuestion)).toMatchObject({
        type: QUESTION_SELECTED,
        payload: {
          activeQuestion
        }
      })
    })
  })
})
