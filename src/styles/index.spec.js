import * as React from 'react'

import { shallow } from 'enzyme'

import GlobalStyle from './'

describe('styles:GlobalStyle', () => {
  it('matches the snapshot', () => {
    expect(toJson(shallow(<GlobalStyle />))).toMatchSnapshot()
  })
})
