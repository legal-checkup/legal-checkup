import { nextQuestion, questionAnswered, surveyCompleted } from './actions'
import {
  INITIAL_STATE,
  NEXT_QUESTION,
  QUESTION_ANSWERED,
  SURVEY_COMPLETED
} from './constants'
import { rootReducer } from './reducers'
import {
  getActiveQuestion,
  getQuestionsLength,
  getResponsesLength
} from './selectors'
import rootEpic from './epics'

export {
  INITIAL_STATE,
  getActiveQuestion,
  getQuestionsLength,
  getResponsesLength,
  NEXT_QUESTION,
  QUESTION_ANSWERED,
  SURVEY_COMPLETED,
  surveyCompleted,
  rootReducer,
  nextQuestion,
  questionAnswered,
  rootEpic
}
