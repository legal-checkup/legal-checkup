import {
  NO_BUTTON_CLICKED,
  NOT_SURE_BUTTON_CLICKED,
  YES_BUTTON_CLICKED
} from '../constants'
function noButtonClicked () {
  return {
    type: NO_BUTTON_CLICKED
  }
}
function yesButtonClicked () {
  return {
    type: YES_BUTTON_CLICKED
  }
}
function notSureButtonClicked () {
  return {
    type: NOT_SURE_BUTTON_CLICKED
  }
}
export { noButtonClicked, yesButtonClicked, notSureButtonClicked }
