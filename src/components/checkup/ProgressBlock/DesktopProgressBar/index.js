import * as React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { isNonEmptyArray } from 'ramda-adjunct'

import { getTopics } from '../../../../state/selectors'
import TopicBar from '../TopicBar'

function DesktopProgressBar ({ topics = [] }) {
  return (
    <span>
      {isNonEmptyArray(topics) &&
        map(({ id, name }) => <TopicBar key={id} topic={name} />, topics)}
    </span>
  )
}

function mapStateToProps ({ checkup }) {
  return {
    topics: getTopics(checkup)
  }
}

export default connect(mapStateToProps)(DesktopProgressBar)
