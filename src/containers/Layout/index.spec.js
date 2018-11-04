import React from 'react'
import { shallow } from 'enzyme'
import Layout from '.'

describe('containers:Layout', () => {
  it('renders the Layout', () => {
    expect(toJson(shallow(<Layout />))).toMatchSnapshot()
  })
})
