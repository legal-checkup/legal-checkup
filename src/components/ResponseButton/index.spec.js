import React from 'react'
import { shallow } from 'enzyme'

import NoButton from '.'

describe('components:NoButton', function () {
  it('renders the NoButton and CSS properties properly', () =>
    expect(toJson(shallow(<NoButton>AnswerBar</NoButton>))).toMatchSnapshot())
})
