import React from 'react'
import { shallow } from 'enzyme'

import { StyledDesktopHeaderLink } from '@containers/DesktopHeader/style'
import { HOME_PATH, CHECKUP_PATH } from '@state/constants'
import makeDesktopHeaderLink from '.'

describe('wrappers:makeDesktopHeader', () => {
  it(`renders the component with 'active' prop when 'pathname' and 'to' match`, () => {
    const DesktopHeaderLink = makeDesktopHeaderLink(StyledDesktopHeaderLink)

    expect(
      shallow(<DesktopHeaderLink to={'/'} pathname={HOME_PATH} />).props()
        .active
    ).toBe(true)
  })

  it(`renders the component without 'active' prop when 'pathname' and 'to' do not match`, () => {
    const DesktopHeaderLink = makeDesktopHeaderLink(StyledDesktopHeaderLink)

    expect(
      shallow(<DesktopHeaderLink to={'/'} pathname={CHECKUP_PATH} />).props()
        .active
    ).toBeUndefined()
  })
})
