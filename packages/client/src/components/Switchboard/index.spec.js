import * as React from 'react'
import { MemoryRouter } from 'react-router'
import { create } from 'react-test-renderer'

import {
  ABOUT_PATH,
  CHECKUP_PATH,
  HELP_PATH,
  HOME_PATH,
  PRIVACY_POLICY_PATH,
  TERMS_OF_USE_PATH
} from '../../state/constants'

import Switchboard from './'

describe('components:Switchboard', () => {
  it('defaults to the home route', () => {
    const testInstance = create(
      <MemoryRouter>
        <Switchboard />
      </MemoryRouter>
    )

    expect(testInstance.root.findAllByProps({ path: HOME_PATH })).toHaveLength(1)
    expect(testInstance.root.findAllByProps({ path: ABOUT_PATH })).toHaveLength(0)
  })

  it('handles the About route', () => {
    const testInstance = create(
      <MemoryRouter initialEntries={[ABOUT_PATH]}>
        <Switchboard />
      </MemoryRouter>
    )

    expect(testInstance.root.findAllByProps({ path: HOME_PATH })).toHaveLength(0)
    expect(testInstance.root.findAllByProps({ path: ABOUT_PATH })).toHaveLength(1)
  })

  it('handles the Checkup route', () => {
    const testInstance = create(
      <MemoryRouter initialEntries={[CHECKUP_PATH]}>
        <Switchboard />
      </MemoryRouter>
    )

    expect(testInstance.root.findAllByProps({ path: CHECKUP_PATH })).toHaveLength(1)
  })

  it('handles the Help route', () => {
    const testInstance = create(
      <MemoryRouter initialEntries={[HELP_PATH]}>
        <Switchboard />
      </MemoryRouter>
    )

    expect(testInstance.root.findAllByProps({ path: HELP_PATH })).toHaveLength(1)
  })

  it('handles the Privacy Policy route', () => {
    const testInstance = create(
      <MemoryRouter initialEntries={[PRIVACY_POLICY_PATH]}>
        <Switchboard />
      </MemoryRouter>
    )

    expect(testInstance.root.findAllByProps({ path: PRIVACY_POLICY_PATH })).toHaveLength(1)
  })

  // it('handles the Results route', () => {
  //   const testInstance = create(
  //     <MemoryRouter initialEntries={[RESULTS_PATH]}>
  //       <Switchboard />
  //     </MemoryRouter>
  //   )

  //   expect(testInstance.root.findAllByProps({ path: RESULTS_PATH })).toHaveLength(1)
  // })

  it('handles the Terms of Use route', () => {
    const testInstance = create(
      <MemoryRouter initialEntries={[TERMS_OF_USE_PATH]}>
        <Switchboard />
      </MemoryRouter>
    )

    expect(testInstance.root.findAllByProps({ path: TERMS_OF_USE_PATH })).toHaveLength(1)
  })
})
