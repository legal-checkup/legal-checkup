import { connect } from 'react-redux'
import React from 'react'
import { PoseGroup } from 'react-pose'

import { getActiveQuestion } from '../../../../state/selectors'

import StyledQuestion from './style'

function mapStateToProps ({ checkup }) {
  const { body: children, id: key } = getActiveQuestion(checkup)
  console.log(key)

  return { children, key }
}

const Question = ({ children, key, format }) => {
  return (
    <PoseGroup>
      {children && (
        <StyledQuestion key={'h'} format={format}>
          {children}
        </StyledQuestion>
      )}
    </PoseGroup>
  )
}

export default connect(mapStateToProps)(Question)
