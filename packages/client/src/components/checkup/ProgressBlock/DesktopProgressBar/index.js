import * as React from 'react'
import { connect } from 'react-redux'

import { map } from 'ramda'
import { isNonEmptyArray } from 'ramda-adjunct'

import TopicBar from '../TopicBar'

import { getTopics } from '../../../../state/selectors'

function DesktopProgressBar ({ topics = [] }) {
  return (
    <div>
      {isNonEmptyArray(topics) &&
        map(({ id, name }) => <TopicBar key={id} topic={name} />, topics)}
    </div>
  )
}

function mapStateToProps ({ checkup }) {
  return {
    topics: getTopics(checkup)
  }
}

export default connect(mapStateToProps)(DesktopProgressBar)
