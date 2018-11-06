import React from 'react'

import { shallow } from 'enzyme'

import Bar from './'

describe('components:styled:Bar', function () {
  it('renders the Bar and CSS properties properly', () =>
    expect(toJson(shallow(<Bar />))).toMatchSnapshot())
})
