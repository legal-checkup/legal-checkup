import * as React from 'react'
import { connect } from 'react-redux'

import { NEED_HELP_RESULT } from '../../../state/constants'
import { getResultType } from '../../../state/selectors'
import { needHelpExpander, needHelpParagraph1, needHelpParagraph2, allGoodText, expanderText } from '../../../constants'

function Expander () {
  return <p data-testid={expanderText}>expander here</p>
}

function allGood () {
  return (
    <p data-testid={allGoodText}>
      Based on your answers, it looks like you're in good legal health!
      But if you have a problem, or something worrying you that wasn't
      covered by the questions in this check-up, do come talk to us at
      Community Law.
    </p>
  )
}

function needHelp () {
  return (
    <>
      <p data-testid={needHelpParagraph1}> Based on your answers, a lawyer may be able to help you with &#8230;</p>
      <Expander data-testid={needHelpExpander} />
      <p data-testid={needHelpParagraph2}>
        You can get free legal advice about these (or any other problem) from
        your local Community Law Centre.
      </p>
    </>
  )
}

function Hero ({ resultType }) {
  switch (resultType) {
    case NEED_HELP_RESULT:
      return needHelp()
    default:
      return allGood()
  }
}

function mapStateToProps ({ checkup }) {
  return {
    resultType: getResultType(checkup)
  }
}

export default connect(mapStateToProps)(Hero)
