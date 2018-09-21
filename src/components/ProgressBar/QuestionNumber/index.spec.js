import React from 'react'
import { shallow } from 'enzyme'

import getQuestionNumber from '.'

describe('components:QuestionNumber', function () {
  it('renders the getQuestionNumber and CSS properties properly', () =>
    expect(
      toJson(shallow(<getQuestionNumber>getQuestionNumber</getQuestionNumber>))
    ).toMatchSnapshot())
})
