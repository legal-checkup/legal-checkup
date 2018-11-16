// Must be a question and no more than one past the last response
export default function isNextQuestionPermitted (index, questionCount, responseCount) {
  console.log('isNextQuestionPermitted index', index)
  console.log('isNextQuestionPermitted questionCount', questionCount)
  console.log('isNextQuestionPermitted responseCount', responseCount)
  console.log('well?', index < responseCount && index < questionCount - 1)
  return index < responseCount && index < questionCount - 1
}
