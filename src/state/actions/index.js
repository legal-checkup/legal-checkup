import { TEST_COUNT, RECIEVE_QUESTIONS } from '../constants'

function testCount () {
  return {
    type: TEST_COUNT
  }
}
function recieveQuestions (questionsarray) {
  return {
    type: RECIEVE_QUESTIONS,
    questionsarray
  }
}

export { testCount, recieveQuestions }
