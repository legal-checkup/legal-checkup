import React from 'react'

import { Layout } from '../../components'
import { QuestionBox, QuestionCounter } from '../../containers'

export default function Checkup () {
  return (
    <Layout>
      <QuestionCounter />
      <QuestionBox />
    </Layout>
  )
}
