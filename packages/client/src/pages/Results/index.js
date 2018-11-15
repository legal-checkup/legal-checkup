import React from 'react'
import Layout from '../../components/Layout'
import RedoCheckup from '../../components/RedoCheckup'

export default function Results () {
  return (
    <Layout>
      <p>
        This is the <strong>Results</strong> page
      </p>
      <div>
        <RedoCheckup />
      </div>
    </Layout>
  )
}
