import AnswerBar from '@containers/AnswerBar'
import DesktopProgressbar from '@containers/DesktopProgressBar'
import Layout from '@containers/Layout'
import QuestionBox from '@containers/QuestionBox'
import QuestionCounter from '@containers/QuestionCounter'

import React from 'react'

export default function Checkup () {
  return (
    <Layout>
      <DesktopProgressbar />
      <QuestionCounter />
      <QuestionBox />
      <AnswerBar />
    </Layout>
  )
}
