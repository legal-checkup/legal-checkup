import {
  noButtonClicked,
  yesButtonClicked,
  notSureButtonClicked
} from '../actions'
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

    it('returns correct action from noButtonClicked', () => {
      expect(JSON.stringify(noButtonClicked())).toBe(
        JSON.stringify({ type: 'NO_BUTTON_CLICKED' })
      )
    })

    it('returns correct action from yesButtonClicked', () => {
      expect(JSON.stringify(yesButtonClicked())).toBe(
        JSON.stringify({ type: 'YES_BUTTON_CLICKED' })
      )
    })

    it('returns correct action from notSureButtonClicked', () => {
      expect(JSON.stringify(notSureButtonClicked())).toBe(
        JSON.stringify({ type: 'NOT_SURE_BUTTON_CLICKED' })
      )
    })
  })
})
