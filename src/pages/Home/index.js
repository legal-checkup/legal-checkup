import React from 'react'

import { Layout, ProgressBar } from '../../components'
import { TestButton } from '../../containers'

export default function Home () {
  return (
    <Layout>
      <p>This is the Home page</p>
      <ProgressBar />
      <p>
        <TestButton />
      </p>
    </Layout>
  )
}
