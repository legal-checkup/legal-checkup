import React from 'react'

import { shallow } from 'enzyme'

import ProgressBar from './'

describe('components:styled:ProgressBar', () => {
  it('renders the ProgressBar and CSS properties properly', () => {
    expect(toJson(shallow(<ProgressBar />))).toMatchSnapshot()
  })
})
