import * as React from 'react'
import { connect } from 'react-redux'

import { NEED_HELP_RESULT } from '../../../state/constants'
import { getResultType } from '../../../state/selectors'
import {
  needHelpExpander,
  needHelpParagraph1,
  needHelpParagraph2,
  allGoodText,
  expanderText
} from '../../../constants'
import ResultAccordion from '../ResultAccordion'
import { ResultHeading, ResultTitle, ResultText } from '../../styled'
import { NO } from '../../../state/constants'
import { AboutCommunityLaw, CommunityLawServices } from '../../home/buttons'
import { PageTextContainer } from '../../layout/Section'

function Expander () {
  return <p data-testid={expanderText}>expander here</p>
}

function allGood (format) {
  return (
    <div>
      <ResultHeading>You're all done.</ResultHeading>
      <ResultTitle>Results</ResultTitle>
      <ResultText data-testid={allGoodText}>
        Based on your answers, it looks like you're in good legal health!
      </ResultText>
      <ResultText>
        But if you have a problem, or something worrying you that wasn't covered
        by the questions in this check-up, do come talk to us at Community Law.
      </ResultText>
      <ResultText>
        You can find information about Community Law services and clinic hours
        below.
      </ResultText>
      <PageTextContainer>
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
      <ResultHeading>You're all done.</ResultHeading>
      <ResultTitle>Results</ResultTitle>
      <ResultText data-testid={needHelpParagraph1}>
        {' '}
        Based on your answers, a lawyer may be able to help you with &#8230;
      </ResultText>
      {/* <Expander data-testid={needHelpExpander} /> */}

      {topicArray.map(topic => {
        return (
          <ResultAccordion
            format={format}
            topicName={topic}
            topicArray={topicArray}
          />
        )
      })}
      <ResultText data-testid={needHelpParagraph2}>
        You can get free legal advice about these (or any other problem) from
        your local Community Law Centre.
      </ResultText>
      <ResultText>
        You can find information about Community Law services and clinic hours
        below.
      </ResultText>
      <PageTextContainer>
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
