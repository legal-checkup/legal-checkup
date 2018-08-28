import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'

import checkForQuestionAnsweredEpic from '.'
import {
  nextQuestion,
  questionAnswered,
  QUESTION_ANSWERED,
  getActiveQuestion,
  getQuestionsLength,
  surveyCompleted
} from '../../'

jest.mock('../../actions', () => ({
  nextQuestion: jest.fn().mockReturnValue({ type: 'NEXT_QUESTION' }),
  questionAnswered: jest.fn().mockReturnValue({ type: 'QUESTION_ANSWERED' }),
  surveyCompleted: jest.fn().mockReturnValue({ type: 'SURVEY_COMPLETED' })
}))

jest.mock('../../selectors', () => ({
  getActiveQuestion: jest
    .fn()
    .mockReturnValueOnce(27)
    .mockReturnValue(28),
  getQuestionsLength: jest.fn().mockReturnValue(28)
}))

describe('epics:checkForQuestionAnsweredEpic', () => {
  it(`dispatches the nextQuestion action when ${QUESTION_ANSWERED}`, () => {
    const epicMiddleware = createEpicMiddleware()
    const store = configureMockStore([epicMiddleware])({})

    const action = questionAnswered()

    epicMiddleware.run(checkForQuestionAnsweredEpic)

    store.dispatch(action)

    expect(store.getActions()).toEqual([action, nextQuestion()])
  })

  it(`dispatches the the surveyComplete action when ${QUESTION_ANSWERED} equals questions length`, () => {
    const epicMiddleware = createEpicMiddleware()
    const store = configureMockStore([epicMiddleware])({})
    const action = questionAnswered()
    epicMiddleware.run(checkForQuestionAnsweredEpic)

    store.dispatch(action)

    expect(store.getActions()).toEqual([action, surveyCompleted()])
  })
})
