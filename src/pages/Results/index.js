import Layout from '@containers/Layout'
import React from 'react'

import ResultsHero from '@containers/ResultsHero'

export default function Results () {
  return (
    <Layout>
      <p>
        This is the <strong>Results</strong> page
      </p>
      <ResultsHero />
    </Layout>
  )
}
