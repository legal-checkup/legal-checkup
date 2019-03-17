import * as React from 'react'

import { connect } from 'react-redux'
import { questionsLoaded } from '../../state/actions'

import { graphql } from 'gatsby'
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

const { useEffect } = React

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

function App ({ data, dispatch }) {
  useEffect(() => {
    handleQuestions()
  }, [])

  function handleQuestions () {
    return dispatch(questionsLoaded(data))
  }

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

export const query = graphql`
  {
    allGoogleSheetQuestionsRow(filter: { status: { eq: "Published" } }) {
      edges {
        node {
          id
          topic
          questiontext
          helptext
          resultstext
          resourcelink
        }
      }
    }
  }
`

export default connect()(App)
