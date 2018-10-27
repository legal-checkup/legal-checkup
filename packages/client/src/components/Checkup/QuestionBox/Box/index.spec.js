import React from 'react'

import { shallow } from 'enzyme'

import Box from './'

describe('components:styled:Box', function () {
  it('renders the Layout and CSS properties properly', () =>
    expect(toJson(shallow(<Box>StyledBox</Box>))).toMatchSnapshot())
})
