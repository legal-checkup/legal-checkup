import React from 'react'
import { shallow } from 'enzyme'

import Results from '.'

describe(`styled:ResultsHero`, () => {
  it(`should render the Results component with the correct styles`, () => {
    expect(toJson(shallow(<Results />))).toMatchSnapshot()
  })
})
