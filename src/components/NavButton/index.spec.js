import React from 'react'
import { shallow } from 'enzyme'

import NavButton from '.'

describe('conponents:NavButton', () => {
  it('renders the NavButton and CSS properties properly', () => {
    const direction = 'back'

    expect(
      toJson(
        shallow(<NavButton direction={direction}>&#x25C0;</NavButton>).dive()
      )
    ).toMatchSnapshot()
  })

  it('should have onClick function prop when unlocked is true', () => {
    const direction = 'back'
    const handleClick = jest.fn()
    const unlocked = true
    const wrapper = shallow(
      <NavButton
        direction={direction}
        handleClick={handleClick}
        unlocked={unlocked}
      >
        &#x25C0;
      </NavButton>
    )

    expect(wrapper.props()).toMatchObject(
      expect.objectContaining({
        direction,
        onClick: expect.any(Function)
      })
    )
  })

  it('should not have onClick prop when unlocked is false', () => {
    const direction = 'back'
    const handleClick = jest.fn()
    const unlocked = false
    const wrapper = shallow(
      <NavButton
        direction={direction}
        handleClick={handleClick}
        unlocked={unlocked}
      >
        &#x25C0;
      </NavButton>
    )

    expect(wrapper.props()).not.toMatchObject(
      expect.objectContaining({
        onClick: expect.anything()
      })
    )
  })
})
