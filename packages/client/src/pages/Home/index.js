import * as React from 'react'
import { Helmet } from 'react-helmet'

// eslint-disable-next-line
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import HomeComponent from '../../components/home'

import Desktop from '../../components/responsive/Desktop'
import Mobile from '../../components/responsive/Mobile'
import Tablet from '../../components/responsive/Tablet'
import { DESKTOP, MOBILE, TABLET, WEBSITE } from '../../constants'

function getLayout (format) {
  return (
    <>
      <Header format={format} />
      <HomeComponent format={format} />
      <Footer format={format} />
    </>
  )
}

export default function Home () {
  return (
    <>
      <Helmet>
        <title>{WEBSITE}</title>
      </Helmet>
      <Mobile>{getLayout(MOBILE)}</Mobile>
      <Tablet>{getLayout(TABLET)}</Tablet>
      <Desktop>{getLayout(DESKTOP)}</Desktop>
    </>
  )
}
