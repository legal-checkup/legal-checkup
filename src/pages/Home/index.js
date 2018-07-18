import React from 'react'
import { ProgressBar } from '../../components'

import { Layout } from '../../components'
import { TestButton } from '../../containers'

export default function Home () {
  return (
    <Layout>
      <p>This is the Home page</p>
      <p>
        <TestButton />
        <ProgressBar />
      </p>
    </Layout>
  )
}
