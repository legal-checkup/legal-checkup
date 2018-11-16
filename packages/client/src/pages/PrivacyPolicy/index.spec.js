import React from 'react'
import { shallow } from 'enzyme'

import PrivacyPolicy from './'

describe('pages:PrivacyPolicy ', () => {
  it('renders the PrivacyPolicy page', () => {
    expect(toJson(shallow(<PrivacyPolicy />).dive())).toMatchSnapshot()
  })
})
