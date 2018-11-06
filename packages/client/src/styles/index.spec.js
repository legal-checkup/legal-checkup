import React from 'react'

import { shallow } from 'enzyme'

import GlobalStyle from './'

describe('components:styled:GlobalStyle', () => {
  it('matches the snapshot', () => {
    expect(toJson(shallow(<GlobalStyle />))).toMatchSnapshot()
  })
})
