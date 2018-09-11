export function getActiveQuestion ({ activeQuestion }) {
  return activeQuestion
}

export function getQuestions ({ questions }) {
  return questions
}
export function getQuestionCount (state) {
  return {
    activeQuestion: getActiveQuestion(state),
    questions: getQuestions(state)
  }
}
