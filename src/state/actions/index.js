import { NEXT_QUESTION, PREVIOUS_QUESTION, TEST_COUNT } from '../constants'

function nextQuestion () {
  return {
    type: NEXT_QUESTION
  }
}

function previousQuestion () {
  return {
    type: PREVIOUS_QUESTION
  }
}

function testCount () {
  return {
    type: TEST_COUNT
  }
}

export { nextQuestion, previousQuestion, testCount }
