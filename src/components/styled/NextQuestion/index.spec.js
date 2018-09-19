import React from 'react'
import { shallow } from 'enzyme'

import NextQuestion from '.'

describe('components:styled:NextQuestion', () => {
  it('renders the NextQuestion CSS properties properly', () => {
    expect(
      toJson(shallow(<NextQuestion>NextQuestion</NextQuestion>))
    ).toMatchSnapshot()
  })

  it('renders the NextQuestion properly with next prop', () => {
    expect(toJson(shallow(<NextQuestion next />))).toMatchSnapshot()
  })
})
