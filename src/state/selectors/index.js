import { keysIn, length } from 'ramda'

function getActiveQuestion ({ activeQuestion }) {
  return activeQuestion
}

function getQuestions ({ questions }) {
  return questions
}
function getQuestionCount (state) {
  return {
    activeQuestion: getActiveQuestion(state),
    questionCount: length(keysIn(getQuestions(state)))
  }
}

function getQuestionBody (state) {
  return getQuestions(state)[getActiveQuestion(state)].body
}

export { getActiveQuestion, getQuestions, getQuestionCount, getQuestionBody }
