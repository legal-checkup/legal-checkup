import React from 'react'
import { shallow } from 'enzyme'

import ProgressBar from '.'

describe('components:ProgressBar', function () {
  it('renders the ProgressBar and CSS properties properly', () =>
    expect(
      toJson(shallow(<ProgressBar>ProgressBar</ProgressBar>).dive())
    ).toMatchSnapshot())
})
