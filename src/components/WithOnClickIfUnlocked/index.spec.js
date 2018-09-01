import React from 'react'
import { shallow } from 'enzyme'

import WithOnClickIfUnlocked from '.'

describe('components:WithOnClickIfUnlocked', () => {
  it('should provide the onClick prop when unlocked is true', () => {
    const props = {
      handleClick: jest.fn().mockReturnValue(() => null),
      unlocked: true
    }
    const Component = props => <button>Click</button>
    const ComponentWithOnClickIfUnlocked = WithOnClickIfUnlocked(Component)
    const wrapper = shallow(<ComponentWithOnClickIfUnlocked {...props} />)

    expect(wrapper.props()).toMatchObject(
      expect.objectContaining({
        onClick: expect.any(Function)
      })
    )
  })

  it('should not provide the onClick prop when unlocked is false', () => {
    const props = { handleClick: jest.fn(), unlocked: false }
    const Component = props => <button>Click</button>
    const ComponentWithOnClickIfUnlocked = WithOnClickIfUnlocked(Component)
    const wrapper = shallow(<ComponentWithOnClickIfUnlocked {...props} />)

    expect(wrapper.props().onClick).toBeUndefined()
  })
})
