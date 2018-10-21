import React from 'react'
import { shallow } from 'enzyme'

import { NO, NOT_SURE, YES } from '@state/constants'
import ResponseButton from '.'

describe('components:styled:NoButton', () => {
  it('renders the ResponseButton and CSS properties properly', () => {
    expect(toJson(shallow(<ResponseButton />))).toMatchSnapshot()
  })
  it('renders the NoButton and CSS properties properly', () => {
    expect(toJson(shallow(<ResponseButton type={NO} />))).toMatchSnapshot()
  })
  it('renders the YesButton and CSS properties properly', () => {
    expect(toJson(shallow(<ResponseButton type={YES} />))).toMatchSnapshot()
  })
  it('renders the NotSureButton and CSS properties properly', () => {
    expect(
      toJson(shallow(<ResponseButton type={NOT_SURE} />))
    ).toMatchSnapshot()
  })
})
