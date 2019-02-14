import * as React from 'react'
import { connect } from 'react-redux'
import { times } from 'ramda'

import makeQuestionButton from '../../wrappers/makeQuestionButton'
import Button from '../Button'
import {
  getActiveQuestionIndex,
  getQuestionCount
} from '../../../../state/selectors'

function QuestionBar ({ activeQuestionIndex, questionCount }) {
  return (
    <div>
      {times(index => {
        const QuestionButton = makeQuestionButton(Button)
        return (
          <QuestionButton
            key={index}
            questionIndex={index}
            active={activeQuestionIndex === index}
          />
        )
      }, questionCount)}
    </div>
  )
}

function mapStateToProps ({ checkup }) {
  return {
    activeQuestionIndex: getActiveQuestionIndex(checkup),
    questionCount: getQuestionCount(checkup)
  }
}

export default connect(mapStateToProps)(QuestionBar)
