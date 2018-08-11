export function getActiveQuestion ({ activeQuestion }) {
  return activeQuestion
}

export function getCount ({ count }) {
  return count
}

export function getCurrentTopic ({ activeQuestion, questions = {} }) {
  return questions[activeQuestion] && questions[activeQuestion].topic
}
