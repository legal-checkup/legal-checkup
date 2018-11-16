import React from 'react'
import Layout from '../../components/Layout'
import DesktopRedoCheckup from '../../components/DesktopRedoCheckup'

export default function Results () {
  return (
    <Layout>
      <p>
        This is the <strong>Results</strong> page
      </p>
      <div>
        <DesktopRedoCheckup />
      </div>
    </Layout>
  )
}
