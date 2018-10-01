import React from 'react'
import { shallow } from 'enzyme'

import { StyledDesktopHeaderLink } from '.'

describe('containers:DesktopHeader', () => {
  describe('style:StyledDesktopHeaderLink', () => {
    it('should render the correct CSS for the StyledDesktopHeaderLink component', () => {
      expect(toJson(shallow(<StyledDesktopHeaderLink />))).toMatchSnapshot()
    })

    it('should render the correct CSS for the StyledDesktopHeaderLink component when active prop is passed', () => {
      expect(
        toJson(shallow(<StyledDesktopHeaderLink active />))
      ).toMatchSnapshot()
    })
  })
})
