import React from 'react'
import { shallow } from 'enzyme'

import PrivacyPolicy from '.'

describe('components:PrivacyPolicy', () => {
  it('renders the PrivacyPolicy page', () => {
    expect(toJson(shallow(<PrivacyPolicy />))).toMatchSnapshot()
  })
})
