import React from 'react'
import { connect } from 'react-redux'

import { Layout } from '../../components'
import { questionAnswered } from '../../state'

function Checkup ({ handleClick }) {
  return (
    <Layout>
      <div>
        <button onClick={handleClick}>Yes</button>
      </div>
    </Layout>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(questionAnswered(1, 'Yes'))
  }
}

export default connect(null, mapDispatchToProps)(Checkup)
