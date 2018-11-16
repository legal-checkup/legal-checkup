import { connect } from 'react-redux'

import { getActiveQuestion } from '../../../state/selectors'

import Box from './Box'

function mapStateToProps ({ checkup }) {
  const { body: children } = getActiveQuestion(checkup)

  return { children }
}

export default connect(mapStateToProps)(Box)
