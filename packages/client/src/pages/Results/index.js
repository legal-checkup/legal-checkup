import React from 'react'

import DesktopRedoCheckup from '../../components/DesktopRedoCheckup'
import Layout from '../../components/Layout'
import ResultsHero from '../../components/Results'

export default function Results () {
  return (
    <Layout>
      <ResultsHero />
      <p>
        This is the <strong>Results</strong> page
      </p>
      <div>
        <DesktopRedoCheckup />
      </div>
    </Layout>
  )
}
