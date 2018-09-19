import React from 'react'
import { shallow } from 'enzyme'

import YesButton from '.'

describe('components:YesButton', function () {
  it('renders the YesButton and CSS properties properly', () =>
    expect(toJson(shallow(<YesButton>YesButton</YesButton>))).toMatchSnapshot())
})
