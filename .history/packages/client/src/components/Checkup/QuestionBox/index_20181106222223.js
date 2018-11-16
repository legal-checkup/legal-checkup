import { connect } from 'react-redux'

import { getActiveQuestion } from '../../../state/selectors'

import Box from './Box'

function mapStateToProps (state) {
  const { body: children } = getActiveQuestion(state)

  return { children }
}

export default connect(mapStateToProps)(Box)
