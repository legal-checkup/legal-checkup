import React from 'react'

import QuestionCounter from '.'
import { StyledQuestionCounter } from '../styled'

describe(`components:QuestionCounter`, () => {
  it(`renders the the correct QuestionCount`, () => {
    const state = {
      activeQuestion: 1,
      questions: {
        1: {
          body: 'Is anyone chasing you for money?',
          topic: 'Money Troubles',
          help: 'The fact that someone is chasing you for money',
          resource: 'credit and debt',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-13-credit-and-debt/what-this-chapter-covers-chapter-13/'
        }
      }
    }

    expect(QuestionCounter(state)).toEqual(
      <StyledQuestionCounter>1 / 1</StyledQuestionCounter>
    )
  })

  it('returns null if activeQuestion is null', () => {
    const state = {
      activeQuestion: null,
      questions: {
        1: {
          body: 'Is anyone chasing you for money?'
        }
      }
    }

    expect(QuestionCounter(state)).toBeNull()
  })
})
