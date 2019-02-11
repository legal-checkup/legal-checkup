import * as React from 'react'
import { create } from 'react-test-renderer'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

import Button from './'

describe('components:checkup:ProgressBar:Button', () => {
  it(`matches the snapshot when format is ${DESKTOP}Next`, () => {
    expect(create(<Button format={`${DESKTOP}Next`}>Button</Button>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${DESKTOP}Previous`, () => {
    expect(create(<Button format={`${DESKTOP}Previous`}>Button</Button>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${DESKTOP}Question`, () => {
    expect(create(<Button format={`${DESKTOP}Question`}>Button</Button>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}Next`, () => {
    expect(create(<Button format={`${MOBILE}Next`}>Button</Button>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}Previous`, () => {
    expect(create(<Button format={`${MOBILE}Previous`}>Button</Button>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}Question`, () => {
    expect(create(<Button format={`${MOBILE}Question`}>Button</Button>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${TABLET}Next`, () => {
    expect(create(<Button format={`${TABLET}Next`}>Button</Button>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${TABLET}Previous`, () => {
    expect(create(<Button format={`${TABLET}Previous`}>Button</Button>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${TABLET}Question`, () => {
    expect(create(<Button format={`${TABLET}Question`}>Button</Button>).toJSON()).toMatchSnapshot()
  })
})
