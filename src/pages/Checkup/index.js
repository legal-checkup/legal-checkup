import AnswerBar from '@containers/AnswerBar'
import Layout from '@containers/Layout'
import MobileProgressBar from '@containers/MobileProgressBar'
import QuestionBox from '@containers/QuestionBox'
import QuestionCounter from '@containers/QuestionCounter'
import QuestionExampleText from '@containers/QuestionExampleText'
import React from 'react'

export default function Checkup () {
  return (
    <Layout>
      <MobileProgressBar />
      <QuestionCounter />
      <QuestionBox />
      <QuestionExampleText />
      <AnswerBar />
    </Layout>
  )
}
