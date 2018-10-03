import isNextQuestionPermitted from '.'

describe('utilities:isNextQuestionPermitted', () => {
  it('No next question if already reach total number of questions', () => {
    const activeQuestionIndex = 9
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

  it('No next question if current question has not been response', () => {
    const activeQuestionIndex = 0
    const totalQuestions = 10
    const totalResponses = 0
    expect(
      isNextQuestionPermitted(
        activeQuestionIndex,
        totalQuestions,
        totalResponses
      )
    ).toBeFalsy()
  })

  it('Can do next question if current question has been response', () => {
    const activeQuestionIndex = 0
    const totalQuestions = 10
    const totalResponses = 1
    expect(
      isNextQuestionPermitted(
        activeQuestionIndex,
        totalQuestions,
        totalResponses
      )
    ).toBeTruthy()
  })
})
