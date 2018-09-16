import {
  NO_BUTTON_CLICKED,
  NOT_SURE_BUTTON_CLICKED,
  YES_BUTTON_CLICKED
} from '../constants'

const noButtonClicked = () => ({ type: NO_BUTTON_CLICKED })

const yesButtonClicked = () => ({ type: YES_BUTTON_CLICKED })

const notSureButtonClicked = () => ({ type: NOT_SURE_BUTTON_CLICKED })

export { noButtonClicked, yesButtonClicked, notSureButtonClicked }
