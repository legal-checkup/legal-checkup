import * as React from 'react'
import { Helmet } from 'react-helmet'

import AnswerBlock from '../../components/checkup/AnswerBlock'
import ProgressBlock from '../../components/checkup/ProgressBlock'
import QuestionBlock from '../../components/checkup/QuestionBlock'
import Block from '../../components/layout/Block'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import Section from '../../components/layout/Section'
import Desktop from '../../components/responsive/Desktop'
import Mobile from '../../components/responsive/Mobile'
import Tablet from '../../components/responsive/Tablet'
import { DESKTOP, MOBILE, TABLET, WEBSITE } from '../../constants'

function getLayout (format) {
  return (
    <>
      <Header format={format} />
      <Section>
        <ProgressBlock format={format} />
        <Block format={format}>
          <QuestionBlock format={format} />
          <AnswerBlock format={format} />
        </Block>
      </Section>
      <Footer format={format} />
    </>
  )
}

export default function CheckUp () {
  return (
    <>
      <Helmet>
        <title>Checkup :: {WEBSITE}</title>
      </Helmet>
      <Mobile>{getLayout(MOBILE)}</Mobile>
      <Tablet>{getLayout(TABLET)}</Tablet>
      <Desktop>{getLayout(DESKTOP)}</Desktop>
    </>
  )
}
