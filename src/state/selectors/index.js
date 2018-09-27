import { identity, length, map, pipe, reduce, times } from 'ramda'

import { createSelector } from 'reselect'
import isNextQuestionPermitted from '@utilities/isNextQuestionPermitted'
import isPreviousQuestionPermitted from '@utilities/isPreviousQuestionPermitted'

export function getQuestions ({ questions }) {
  return questions
}

// To get an array of indices ([0, 1, 2, 3]), it is enough to get the length
// And then use the `times` function to count up to that count
// Passing each number in turn to the `identity` function, which just returns it unchanged
const getIndices = pipe(
  length,
  times(identity)
)

// This simply gets the top-level key `activeQuestionIndex`
export function getActiveQuestionIndex ({ activeQuestionIndex }) {
  return activeQuestionIndex
}

// This simply gets the top-level key `activeQuestionIndex`
export function getTopics ({ topics }) {
  return topics
}

// This simply gets the top-level key `activeQuestionIndex`
export function getResponses ({ responses }) {
  return responses
}

// First use `getTopics` above to get the topics array
// Then pass that into our `reduce` function as the third argument
// The reducer then loops through the array of topics and for each topic
// it takes the topic's questions array and spreads it out into the accumulator array
// while adding the `topic` and `topicId` to each question.
// Returns a list of questions, each with the topic name and topic ID.
export const getQuestionList = createSelector(
  getTopics,
  reduce((acc, { id, name, questions }) => {
    const topicQuestions = map(
      question => ({ ...question, topic: name, topicId: id }),
      questions
    )

    return [...acc, ...topicQuestions]
  }, [])
)

// Nice way to use Ramda - we use the `getQuestionList` selector to get the list of questions (above)
// then pass that to Ramda's `length` function to get the question count
export const getQuestionCount = createSelector(getQuestionList, length)

// Same as above, but we pass the question list to our `getIndices` function (above)
// which returns an array of the question indices (add one to each and you get the question numbers)
export const getQuestionIndices = createSelector(getQuestionList, getIndices)

// Use `getActiveQuestionIndex` and `getQuestionList` to get the activeQuestionIndex and questionList respectively
// Then pass those into a function that returns the question at the activeQuestionIndex -- the active question
export const getActiveQuestion = createSelector(
  getActiveQuestionIndex,
  getQuestionList,
  (activeQuestionIndex, questions) => questions[activeQuestionIndex]
)

// Use `getActiveQuestion` (above) to get the active question, then extract the topic name from it
export const getCurrentTopicName = createSelector(
  getActiveQuestion,
  ({ topic } = {}) => topic
)

// As with `getQuestionList` above, but this time we get the responses as an array of questions (with answers)
export const getResponseList = createSelector(
  getResponses,
  reduce((acc, { id, name, questions }) => {
    const topicQuestions = map(
      question => ({ ...question, topic: name, topicId: id }),
      questions
    )

    return [...acc, ...topicQuestions]
  }, [])
)

// Use `getResponseList` then pass it to Ramda's `length` function to get the response count
export const getResponseCount = createSelector(getResponseList, length)

// Another use for selectors -- here we use the activeQuestionIndex, the questionCount, and the responseCount
// to determine whether the Next button should be enabled or disabled
export const checkNextQuestionEnabled = createSelector(
  getActiveQuestionIndex,
  getQuestionCount,
  getResponseCount,
  isNextQuestionPermitted
)

// And here we us the activeQuestionIndex to determine whether the Previous button should be enabled or disabled
export const checkPreviousQuestionEnabled = createSelector(
  getActiveQuestionIndex,
  isPreviousQuestionPermitted
)
