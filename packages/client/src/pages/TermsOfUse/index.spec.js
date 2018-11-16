import React from 'react'
import { shallow } from 'enzyme'

import TermsOfUse from './'

describe('pages:TermsOfUse ', () => {
  it('renders the TermsOfUse  page', () => {
    expect(toJson(shallow(<TermsOfUse />))).toMatchSnapshot()
  })
})
