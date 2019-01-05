import * as React from 'react'
import { create } from 'react-test-renderer'

import { mount } from 'enzyme'

import Title from './'
import { DESKTOP, TABLET, MOBILE, WHITE, ROUGE } from '../../../../constants'

describe('components:layout:Header:Title', () => {
  it(`Renders 'CHECKUP' text 'rouge' (${ROUGE}) on ${DESKTOP}`, () => {
    const wrapper = mount(<Title format={DESKTOP}>Title</Title>).find('Wrapper')

    expect(wrapper.find('StyledCheckup')).toHaveStyleRule('color', ROUGE)
  })

  it(`Renders 'CHECKUP' text 'rouge' (${ROUGE}) on ${TABLET}`, () => {
    const wrapper = mount(<Title format={TABLET}>Title</Title>).find('Wrapper')

    expect(wrapper.find('StyledCheckup')).toHaveStyleRule('color', ROUGE)
  })

  it(`Renders 'CHECKUP' text 'white' (${WHITE}) on ${MOBILE}`, () => {
    const wrapper = mount(<Title format={MOBILE}>Title</Title>).find('Wrapper')

    expect(wrapper.find('StyledCheckup')).toHaveStyleRule('color', WHITE)
  })

  it('renders correctly', () => {
    expect(create(<Title />).toJSON()).toMatchSnapshot()
  })
})
