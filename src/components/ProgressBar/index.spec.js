import React from 'react'
import { shallow } from 'enzyme'

import ProgressBar from '.'

describe('components:ProgressBar', () => {
  it('renders the ProgressBar and CSS properties properly', () => {
    expect(
      toJson(shallow(<ProgressBar answered={2} current={2} total={3} />))
    ).toMatchSnapshot()
  })

  it('renders the ProgressBar and correct number of Question components', () => {
    const total = 4

    expect(
      shallow(<ProgressBar answered={2} current={2} total={total} />).find(
        'Question'
      )
    ).toHaveLength(total)
  })
})
