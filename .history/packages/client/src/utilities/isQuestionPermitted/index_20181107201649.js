// Can't be less than zero
// Can't go more than one past the responses
// Can't exceed the number of questions
export default function isQuestionPermitted (
  index,
  questionCount,
  responseCount
) {
  console.log(index, questionCount, responseCount, index >= 0 && index < responseCount + 1 && index < questionCount)
  return index >= 0 && index < responseCount + 1 && index < questionCount
}
