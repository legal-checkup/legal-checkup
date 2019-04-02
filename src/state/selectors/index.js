import {
  filter,
  identity,
  length,
  map,
  pathOr,
  pipe,
  reduce,
  times
} from 'ramda'
import { mapIndexed } from 'ramda-adjunct'
import { createSelector } from 'reselect'

import isNextQuestionPermitted from '../../utilities/isNextQuestionPermitted'
import isPreviousQuestionPermitted from '../../utilities/isPreviousQuestionPermitted'
import {
  ALL_GOOD_RESULT,
  NEED_HELP_RESULT,
  NO,
  NOT_SURE,
  RESULTS_TRIGGER,
  YES
} from '../constants'
import isQuestionPermitted from '../../utilities/isQuestionPermitted'

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
export const getQuestionCount = createSelector(
  getQuestionList,
  length
)

// Same as above, but we pass the question list to our `getIndices` function (above)
// which returns an array of the question indices (add one to each and you get the question numbers)
export const getQuestionIndices = createSelector(
  getQuestionList,
  getIndices
)

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
export const getResponseCount = createSelector(
  getResponseList,
  length
)

// Get all NO answers
export const getNoAnswers = createSelector(
  getResponseList,
  filter(({ answer }) => answer === NO)
)

// Get all NOT_SURE answers
export const getNotSureAnswers = createSelector(
  getResponseList,
  filter(({ answer }) => answer === NOT_SURE)
)

// Get all YES answers
export const getYesAnswers = createSelector(
  getResponseList,
  filter(({ answer }) => answer === YES)
)

export const getActiveQuestionAnswer = createSelector(
  getResponseList,
  getActiveQuestionIndex,
  (answers, activeQuestionIndex) =>
    answers &&
    answers[activeQuestionIndex] &&
    answers[activeQuestionIndex].answer
)

// Get the result type based on the RESULTS_TRIGGER;
// return NEEDS_HELP_RESULT if triggered, else ALL_GOOD_RESULT.
// Used to display results on the Results page.
export const getResultType = createSelector(
  getYesAnswers,
  yesAnswers =>
    length(yesAnswers) >= RESULTS_TRIGGER ? NEED_HELP_RESULT : ALL_GOOD_RESULT
)

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

export const checkQuestionEnabled = index =>
  createSelector(
    getQuestionCount,
    getResponseCount,
    (questionCount, responseCount) =>
      isQuestionPermitted(index, questionCount, responseCount)
  )

export const getPathname = pathOr({}, ['router', 'location', 'pathname'])

export const getQuestionListIndexed = pipe(
  getQuestionList,
  mapIndexed((question, index) => ({ ...question, index }))
)

export const makeGetTopicQuestions = () =>
  createSelector(
    (_, { topic } = {}) => topic,
    getQuestionListIndexed,
    (filterTopic, questions) =>
      filter(({ topic }) => topic === filterTopic, questions)
  )
