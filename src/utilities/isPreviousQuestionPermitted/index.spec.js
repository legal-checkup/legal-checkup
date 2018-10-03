import isPreviousQuestionPermitted from '.'

describe('utilities:isNextQuestionPermitted', () => {
  it('No previous question if already at the beginning', () => {
    const activeQuestionIndex = 0
    const totalQuestions = 10
    const totalResponses = 0
    expect(
      isPreviousQuestionPermitted(
        activeQuestionIndex,
        totalQuestions,
        totalResponses
      )
    ).toBeFalsy()
  })

  it('No previous question if already at the beginning (version 2)', () => {
    const activeQuestionIndex = 0
    const totalQuestions = 10
    const totalResponses = 1
    expect(
      isPreviousQuestionPermitted(
        activeQuestionIndex,
        totalQuestions,
        totalResponses
      )
    ).toBeFalsy()
  })

  it('Can go back to do previous question from the end', () => {
    const activeQuestionIndex = 9
    const totalQuestions = 10
    const totalResponses = 10
    expect(
      isPreviousQuestionPermitted(
        activeQuestionIndex,
        totalQuestions,
        totalResponses
      )
    ).toBeTruthy()
  })

  it('Can go back to do previous question after response to first question', () => {
    const activeQuestionIndex = 1
    const totalQuestions = 10
    const totalResponses = 1
    expect(
      isPreviousQuestionPermitted(
        activeQuestionIndex,
        totalQuestions,
        totalResponses
      )
    ).toBeTruthy()
  })
})
