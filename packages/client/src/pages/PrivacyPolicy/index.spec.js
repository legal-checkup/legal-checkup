import * as React from 'react'
import { create } from 'react-test-renderer'

import PrivacyPolicy from './'

describe('pages:PrivacyPolicy ', () => {
  it('renders the PrivacyPolicy page', () => {
    expect(create(<PrivacyPolicy />).toJSON()).toMatchSnapshot()
  })
})
