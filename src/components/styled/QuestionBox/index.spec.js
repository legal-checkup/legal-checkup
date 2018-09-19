import React from 'react'
import { shallow } from 'enzyme'

import QuestionBox from '.'

describe('components:styled:QuestionBox', function () {
  it('renders the Layout and CSS properties properly', () =>
    expect(
      toJson(shallow(<QuestionBox>StyledQuestionBox</QuestionBox>))
    ).toMatchSnapshot())
})
