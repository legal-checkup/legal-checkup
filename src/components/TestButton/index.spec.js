import React from 'react'
import { shallow } from 'enzyme'

import TestButton from '.'

describe('components:TestButton', function () {
  it('renders the TestButton and CSS properties properly', () =>
    expect(
      toJson(shallow(<TestButton>TestButton</TestButton>))
    ).toMatchSnapshot())
})
