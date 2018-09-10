import React from 'react'

import QuestionBox from '.'
import { StyledQuestionBox } from '../styled'

describe('components:QuestionBox', () => {
  it(`renders the QuestionBox component when a question is provided`, () => {
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

    expect(QuestionBox(state)).toEqual(
      <StyledQuestionBox>
        {'Is anyone chasing you for money?'}
      </StyledQuestionBox>
    )
  })

  it(`returns null when a question is not provided`, () => {
    const state = {
      activeQuestion: 1,
      questions: {
        1: {
          topic: 'Money Troubles',
          help: 'The fact that someone is chasing you for money',
          resource: 'credit and debt',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-13-credit-and-debt/what-this-chapter-covers-chapter-13/'
        }
      }
    }

    expect(QuestionBox(state)).toEqual(null)
  })
})
