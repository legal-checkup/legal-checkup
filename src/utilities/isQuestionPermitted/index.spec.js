import isQuestionPermitted from '.'

describe('utilities:isQuestionPermitted', () => {
  it('Not permitted if index is less than 0', () => {
    const activeQuestionIndex = -1
    const totalQuestions = 10
    const totalResponses = 5
    expect(
      isQuestionPermitted(activeQuestionIndex, totalQuestions, totalResponses)
    ).toBeFalsy()
  })

  it('Not permitted if index is more than current total questions', () => {
    const activeQuestionIndex = 10
    const totalQuestions = 10
    const totalResponses = 5
    expect(
      isQuestionPermitted(activeQuestionIndex, totalQuestions, totalResponses)
    ).toBeFalsy()
  })

  it('Not permitted if index is more than totalResponses + 1', () => {
    const activeQuestionIndex = 6
    const totalQuestions = 10
    const totalResponses = 5
    expect(
      isQuestionPermitted(activeQuestionIndex, totalQuestions, totalResponses)
    ).toBeFalsy()
  })

  it('Permitted if index is between 0 and (totalResponses + 1) and less than totalQuestions', () => {
    const activeQuestionIndex = 5
    const totalQuestions = 10
    const totalResponses = 5
    expect(
      isQuestionPermitted(activeQuestionIndex, totalQuestions, totalResponses)
    ).toBeTruthy()
  })
})
