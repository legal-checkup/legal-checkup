import React from 'react'
import { shallow } from 'enzyme'

import ResultsHero from '.'

describe(`ResultsHero:style`, () => {
  it(`should render the ResultsHero div with the correct styles`, () => {
    expect(toJson(shallow(<ResultsHero />))).toMatchSnapshot()
  })
})
