import {
  QUESTION_SELECTED,
  NO_BUTTON_CLICKED,
  NOT_SURE_BUTTON_CLICKED,
  YES_BUTTON_CLICKED
} from '../constants'

const noButtonClicked = () => ({ type: NO_BUTTON_CLICKED })

const yesButtonClicked = () => ({ type: YES_BUTTON_CLICKED })

const notSureButtonClicked = () => ({ type: NOT_SURE_BUTTON_CLICKED })

function questionSelected (question) {
  return {
    type: QUESTION_SELECTED,
    payload: {
      question
    }
  }
}

export {
  noButtonClicked,
  yesButtonClicked,
  notSureButtonClicked,
  questionSelected
}
