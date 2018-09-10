export function getActiveQuestion ({ activeQuestion }) {
  return activeQuestion
}

export function getQuestions ({ questions }) {
  return questions
}
export function getQuestionCount ({ activeQuestion, questions }) {
  return {
    activeQuestion: getActiveQuestion,
    questions: getQuestions
  }
}
