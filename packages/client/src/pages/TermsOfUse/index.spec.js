import * as React from 'react'
import { create } from 'react-test-renderer'

import TermsOfUse from './'

describe('pages:TermsOfUse ', () => {
  it('renders the TermsOfUse  page', () => {
    expect(create(<TermsOfUse />).toJSON()).toMatchSnapshot()
  })
})
