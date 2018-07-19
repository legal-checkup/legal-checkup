import React from 'react'
import { shallow } from 'enzyme'

import Header from '.'

describe('components:styled:Header', function () {
  it('renders the Header and CSS properties properly', () =>
    expect(toJson(shallow(<Header>Header</Header>))).toMatchSnapshot())
})
