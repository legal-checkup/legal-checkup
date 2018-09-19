import Layout from '../../components/Layout'
import QuestionBox from '../../containers/QuestionBox'
import QuestionCounter from '../../containers/QuestionCounter'
import React from 'react'

export default function Checkup () {
  return (
    <Layout>
      <QuestionCounter />
      <QuestionBox />
    </Layout>
  )
}
