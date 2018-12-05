import * as React from 'react'
import { create } from 'react-test-renderer'

import Title from './'
import { MOBILE } from '../../../../constants'

describe('components:layout:Header:Title', () => {
  it('renders the snapshot', () => {
    expect(create(<Title>Title</Title>).toJSON()).toMatchSnapshot()
  })

  it('renders correct css when format is mobile', () => {
    expect(create(<Title format={MOBILE} />).toJSON()).toMatchSnapshot()
  })
})
