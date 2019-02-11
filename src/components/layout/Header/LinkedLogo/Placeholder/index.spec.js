import * as React from 'react'
import { create } from 'react-test-renderer'

import Placeholder from './'

describe('components:layout:Header:LinkedLogo:Placeholder', function () {
  it(`matches the snapshot`, () => {
    expect(create(<Placeholder>Placeholder</Placeholder>).toJSON()).toMatchSnapshot()
  })
})
