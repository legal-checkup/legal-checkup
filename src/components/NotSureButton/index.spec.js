import React from 'react'
import { shallow } from 'enzyme'

import NotSureButton from '.'

describe('components:NotSureButton', function () {
  it('renders the NotSureButton and CSS properties properly', () =>
    expect(
      toJson(shallow(<NotSureButton>AnswerBar</NotSureButton>))
    ).toMatchSnapshot())
})
