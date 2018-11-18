import * as React from 'react'
import { create } from 'react-test-renderer'

import Logo from './'

describe('components:layout:Header:LinkedLogo:Logo', function () {
  it(`matches the snapshot`, () => {
    expect(create(<Logo>Logo</Logo>).toJSON()).toMatchSnapshot()
  })
})
