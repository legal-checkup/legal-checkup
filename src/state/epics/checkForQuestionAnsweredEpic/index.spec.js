import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'

import checkForQuestionAnsweredEpic from '.'
import { nextQuestion, questionAnswered, QUESTION_ANSWERED } from '../../'

jest.mock('../../actions', () => ({
  nextQuestion: jest.fn().mockReturnValue({ type: 'NEXT_QUESTION' }),
  questionAnswered: jest.fn().mockReturnValue({
    type: 'QUESTION_ANSWERED',
    payload: { question: 1, answer: 'Yes' }
  })
}))

describe('epics:checkForQuestionAnsweredEpic', () => {
  it(`dispatches the nextQuestion action when ${QUESTION_ANSWERED}`, () => {
    const epicMiddleware = createEpicMiddleware()
    const store = configureMockStore([epicMiddleware])({})
    const question = 1
    const answer = 'yes'
    const action = questionAnswered(question, answer)

    epicMiddleware.run(checkForQuestionAnsweredEpic)

    store.dispatch(action)

    expect(nextQuestion.mock.calls).toHaveLength(1)
  })
})
