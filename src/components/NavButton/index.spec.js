import React from 'react'
import { shallow } from 'enzyme'

import NavButton from '.'

describe('components:NavButton', () => {
  it('renders NavButton and CSS properties properly for no type', () => {
    expect(
      toJson(shallow(<NavButton answered={2} current={2} type='' />))
    ).toMatchSnapshot()
  })

  it('renders NavButton and CSS properties properly for active back button', () => {
    expect(
      toJson(shallow(<NavButton answered={2} current={2} type='back' />))
    ).toMatchSnapshot()
  })

  it('renders NavButton and CSS properties properly for disabled back button', () => {
    expect(
      toJson(shallow(<NavButton answered={2} current={1} type='back' />))
    ).toMatchSnapshot()
  })

  it('renders NavButton and CSS properties properly for active forward button', () => {
    expect(
      toJson(shallow(<NavButton answered={2} current={1} type='forward' />))
    ).toMatchSnapshot()
  })

  it('renders NavButton and CSS properties properly for disabled forward button', () => {
    expect(
      toJson(shallow(<NavButton answered={2} current={2} type='forward' />))
    ).toMatchSnapshot()
  })
})
