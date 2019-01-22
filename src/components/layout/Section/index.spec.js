import * as React from 'react'
import { create } from 'react-test-renderer'

import Section from './'

describe('components:layout:Section', function () {
  it('renders the Section and CSS properties properly', () => {
    expect(create(<Section>Section</Section>).toJSON()).toMatchSnapshot()
  })
})
