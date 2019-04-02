import * as React from 'react'

import { AboutCommunityLaw, CommunityLawServices } from '../../home/buttons'
import { NEED_HELP_RESULT, NO } from '../../../state/constants'
import { ResultHeading, ResultText, ResultTitle } from '../../styled'
import {
  allGoodText,
  needHelpParagraph1,
  needHelpParagraph2
} from '../../../constants'
import { filter, isEmpty, map, not, pipe } from 'ramda'

import { PageTextContainer } from '../../layout/Section'
import ResultAccordion from '../ResultAccordion'
import { connect } from 'react-redux'
import { getResultType } from '../../../state/selectors'

function allGood (format) {
  return (
    <div>
      <PageTextContainer>
        <ResultHeading>You're all done.</ResultHeading>
        <ResultTitle>Results</ResultTitle>
        <ResultText data-testid={allGoodText}>
          Based on your answers, it looks like you're in good legal health!
        </ResultText>
        <ResultText>
          But if you have a problem, or something worrying you that wasn't
          covered by the questions in this check-up, do come talk to us at
          Community Law.
        </ResultText>
        <ResultText>
          You can find information about Community Law services and clinic hours
          below.
        </ResultText>
        <AboutCommunityLaw
          format={format}
          href='http://www.wclc.org.nz/about-us/'
        >
          About Community Law
        </AboutCommunityLaw>
        <CommunityLawServices
          format={format}
          href='http://www.wclc.org.nz/our-services/'
        >
          Community Law Services
        </CommunityLawServices>
      </PageTextContainer>
      <hr />
    </div>
  )
}

const hasResults = pipe(
  filter(question => question.answer !== NO),
  isEmpty,
  not
)

function needHelp (results, format) {
  const topicArray = []
  results.map(topic => {
    if (topic.questions.filter(question => question.answer !== NO).length > 0) {
      topicArray.push(topic)
    } else {
    }
  })

  return (
    <div>
      <PageTextContainer>
        <ResultHeading>You're all done.</ResultHeading>
        <ResultTitle>Results</ResultTitle>
        <ResultText data-testid={needHelpParagraph1}>
          {' '}
          Based on your answers, a lawyer may be able to help you with &#8230;
        </ResultText>
        {map(
          topicName =>
            hasResults(topicName.questions) ? (
              <ResultAccordion
                key={topicName.id}
                format={format}
                topicName={topicName}
                topicArray={topicArray}
              />
            ) : null,
          results
        )}
        <ResultText data-testid={needHelpParagraph2}>
          You can get free legal advice about these (or any other problem) from
          your local Community Law Centre.
        </ResultText>
        <ResultText>
          You can find information about Community Law services and clinic hours
          below.
        </ResultText>
        <AboutCommunityLaw
          format={format}
          href='http://www.wclc.org.nz/about-us/'
        >
          About Community Law
        </AboutCommunityLaw>
        <CommunityLawServices
          format={format}
          href='http://www.wclc.org.nz/our-services/'
        >
          Community Law Services
        </CommunityLawServices>
      </PageTextContainer>
      <hr />
    </div>
  )
}

function Hero ({ resultType, results, format }) {
  switch (resultType) {
    case NEED_HELP_RESULT:
      return needHelp(results, format)
    default:
      return allGood(format)
  }
}

function mapStateToProps ({ checkup }) {
  return {
    resultType: getResultType(checkup),
    results: checkup.responses
  }
}

export default connect(mapStateToProps)(Hero)
