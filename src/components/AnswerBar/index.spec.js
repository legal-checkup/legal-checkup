import React from 'react'
import { shallow } from 'enzyme'

import AnswerBar from '.'

describe('components:AnswerBar', function () {
  it('renders the AnswerBar and CSS properties properly', () =>
    expect(toJson(shallow(<AnswerBar>AnswerBar</AnswerBar>))).toMatchSnapshot())
})
