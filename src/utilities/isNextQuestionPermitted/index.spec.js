import isNextQuestionPermitted from '.'

describe('utilities:isNextQuestionPermitted', () => {
  it('Index should not exceed total number of questions', () => {
    const activeQuestionIndex = 10
    const totalQuestions = 10
    const totalResponses = 10
    expect(
      isNextQuestionPermitted(
        activeQuestionIndex,
        totalQuestions,
        totalResponses
      )
    ).toBeFalsy()
  })

  it('Index should not exceed one past last response', () => {
    const activeQuestionIndex = 5
    const totalQuestions = 10
    const totalResponses = 5
    expect(
      isNextQuestionPermitted(
        activeQuestionIndex,
        totalQuestions,
        totalResponses
      )
    ).toBeFalsy()
  })

  it('Index could be one past last response', () => {
    const activeQuestionIndex = 0
    const totalQuestions = 10
    const totalResponses = 0
    expect(
      isNextQuestionPermitted(
        activeQuestionIndex,
        totalQuestions,
        totalResponses
      )
    ).toBeTruthy()
  })
})
