import React from 'react'

import Layout from '../'

import Desktop from '../../responsive/Desktop'
import Mobile from '../../responsive/Mobile'
import Tablet from '../../responsive/Tablet'
import { DESKTOP, MOBILE, TABLET } from '../../../constants'
import { FormatProvider } from '../FormatContext'

const wrapPageElement = ({ element }) => {
  return (
    <>
      <Mobile>
        <FormatProvider value={MOBILE}>
          <Layout format={MOBILE}>{element}</Layout>
        </FormatProvider>
      </Mobile>
      <Tablet>
        <FormatProvider value={TABLET}>
          <Layout format={TABLET}>{element}</Layout>
        </FormatProvider>
      </Tablet>
      <Desktop>
        <FormatProvider value={DESKTOP}>
          <Layout format={DESKTOP}>{element}</Layout>
        </FormatProvider>
      </Desktop>
    </>
  )
}
export default wrapPageElement
