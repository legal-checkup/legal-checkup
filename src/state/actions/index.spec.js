import {
  noButtonClicked,
  yesButtonClicked,
  notSureButtonClicked
} from '../actions'

describe('state:actions', () => {
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
