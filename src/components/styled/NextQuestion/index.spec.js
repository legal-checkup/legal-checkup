import React from 'react'
import { shallow } from 'enzyme'

import NextQuestion from '.'

describe('components:styled:NextQuestion', () => {
  it('renders the NextQuestion and CSS properties properly', () => {
    expect(
      toJson(shallow(<NextQuestion>NextQuestion</NextQuestion>))
    ).toMatchSnapshot()
  })

  it('renders the NextQuestion and CSS properties properly with onClick prop', () => {
    expect(
      toJson(shallow(<NextQuestion onClick={() => null} />))
    ).toMatchSnapshot()
  })
})
