import React from 'react'
import { shallow } from 'enzyme'

import LockedQuestionNumber from '.'

describe('styled:LockedQuestionNumber', () => {
  it('renders the LockedQuestionNumber and CSS properties properly', () => {
    expect(toJson(shallow(<LockedQuestionNumber />))).toMatchSnapshot()
  })
})
