import * as React from 'react'

import AnswerBlock from '../../components/checkup/AnswerBlock'
import Block from '../../components/layout/Block'
import { FormatConsumer } from '../../components/layout/FormatContext'
import { Helmet } from 'react-helmet'
import ProgressBlock from '../../components/checkup/ProgressBlock'
import QuestionBlock from '../../components/checkup/QuestionBlock'
import Section from '../../components/layout/Section'
import { WEBSITE } from '../../constants'
import { connect } from 'react-redux'
import { getQuestionCount } from '../../state/selectors'
import { graphql } from 'gatsby'
import { questionsLoaded } from '../../state/actions'

const { useEffect } = React

function App ({ data, dispatch, loaded }) {
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

      <FormatConsumer>
        {value => (
          <Section>
            {loaded ? (
              <>
                <ProgressBlock format={value} />
                <Block format={value}>
                  <QuestionBlock format={value} />
                  <AnswerBlock format={value} />
                </Block>
              </>
            ) : null}
          </Section>
        )}
      </FormatConsumer>
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

function mapStateToProps ({ checkup }) {
  const loaded = getQuestionCount(checkup) > 2

  return {
    loaded: loaded
  }
}

export default connect(mapStateToProps)(App)
