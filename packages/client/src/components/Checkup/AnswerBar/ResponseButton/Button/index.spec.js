import React from 'react'

import { shallow } from 'enzyme'

import { NO, NOT_SURE, YES } from '../../../../../state/constants'
import Button from '.'

describe('components:styled:NoButton', () => {
  it('renders the Button and CSS properties properly', () => {
    expect(toJson(shallow(<Button />))).toMatchSnapshot()
  })
  it('renders the NoButton and CSS properties properly', () => {
    expect(toJson(shallow(<Button type={NO} />))).toMatchSnapshot()
  })
  it('renders the YesButton and CSS properties properly', () => {
    expect(toJson(shallow(<Button type={YES} />))).toMatchSnapshot()
  })
  it('renders the NotSureButton and CSS properties properly', () => {
    expect(toJson(shallow(<Button type={NOT_SURE} />))).toMatchSnapshot()
  })
})
