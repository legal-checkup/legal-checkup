import React from 'react'
import { shallow } from 'enzyme'

import QuestionBox from '.'

describe('components:QuestionBox', function () {
  it('renders the QuestionBox and CSS properties properly', () =>
    expect(
      toJson(shallow(<QuestionBox>QuestionBox</QuestionBox>))
    ).toMatchSnapshot())
})
