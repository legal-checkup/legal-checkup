import React from 'react'

import { shallow } from 'enzyme'

import Section from '.'

describe('components:styled:Section', function () {
  it('renders the Section and CSS properties properly', () =>
    expect(toJson(shallow(<Section>StyledSection</Section>))).toMatchSnapshot())
})
