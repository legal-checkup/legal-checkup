// Must be a question and no more than one past the last response
export default function isNextQuestionPermitted (index, questionCount, responseCount) {
  console.log('next', index, questionCount, responseCount, index < responseCount && index < questionCount - 1)
  return index < responseCount && index < questionCount - 1
}