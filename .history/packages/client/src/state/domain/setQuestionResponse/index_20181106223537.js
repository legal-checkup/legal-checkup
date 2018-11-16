import { findIndex, lensPath, set } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import { getActiveQuestion, getResponses, getTopics } from '../../selectors'

// Copies the question into the responses hierarchy and injects the `answer` into it
export default function setQuestionResponse (state, answer) {
  const activeQuestion = getActiveQuestion(state)

  // If there is no active question, return the state unchanged
  if (isUndefined(activeQuestion)) {
    return state
  }

  const { topicId, id } = activeQuestion // Get the topic and question IDs
  const topics = getTopics(state)
  const responses = getResponses(state)
  const topicIndex = findIndex(t => t.id === topicId, topics) // Get the index of this topic in the topics array

  // If the topic doesn't exist, return the state unchanged
  if (topicIndex < 0) {
    return state
  }

  const topic = topics[topicIndex] // Get the topic
  const questionIndex = findIndex(q => q.id === id, topic.questions) // Get the index of this question in the topic's questions array

  // If the question doesn't exist, return the state unchanged
  if (questionIndex < 0) {
    return state
  }

  // Create a 'lens' into the nested responses array/objects that permits us to reach in and get or set a nested value
  const lp = lensPath(['checkup', 'responses', topicIndex, 'questions', questionIndex])

  // If the topic already exists in the responses, then inject or update the question (with answer) into it
  if (responses[topicIndex]) {
    return set(lp, { ...activeQuestion, answer }, state)
  } else {
    // If the topic does not exist, first inject the topic into the responses array (at the correct index)

    const tp = lensPath(['checkup', 'responses', topicIndex])
    const newState = set(
      tp,
      { id: topicId, name: topic.name, questions: [] },
      state
    )

    // Then inject the question (and answer)
    return set(lp, { ...activeQuestion, answer }, newState)
  }
}
