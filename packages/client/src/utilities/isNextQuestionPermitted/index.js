// Must be a question and no more than one past the last response
export default function isNextQuestionPermitted (
  index,
  questionCount,
  responseCount
) {
  return index < responseCount && index < questionCount - 1
}
