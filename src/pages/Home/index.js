import React from 'react'

import { Layout } from '../../components'
import { TestButton } from '../../containers'

export default function Home () {
  return (
    <Layout>
      <p>This is the Home page</p>
      <p>
        <TestButton />
      </p>
    </Layout>
  )
}
