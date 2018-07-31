import React from 'react'
import { shallow } from 'enzyme'

import UnlockedQuestionNumber from '.'

describe('styled:UnlockedQuestionNumber', () => {
  it('renders the UnlockedQuestionNumber and CSS properties properly', () => {
    expect(toJson(shallow(<UnlockedQuestionNumber />))).toMatchSnapshot()
  })
})
