import { connect } from 'react-redux'

import { getActiveQuestion } from '../../../../state/selectors'

import Wrapper from './Wrapper'

function mapStateToProps ({ checkup }) {
  const { body: children } = getActiveQuestion(checkup)

  return { children }
}

export default connect(mapStateToProps)(Wrapper)
