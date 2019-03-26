import * as React from 'react'
import { Helmet } from 'react-helmet'

import HomeComponent from '../components/home'

import { WEBSITE } from '../constants'
import { FormatConsumer } from '../components/layout/FormatContext'

export default function Home () {
  return (
    <>
      <Helmet>
        <title>{WEBSITE}</title>
      </Helmet>
      <FormatConsumer>
        {value => <HomeComponent format={value} />}
      </FormatConsumer>
    </>
  )
}
