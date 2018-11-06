import * as React from 'react'

import AnswerBar from './AnswerBar'
import MobileProgressBar from './MobileProgressBar'
import QuestionBox from './QuestionBox'
import QuestionCounter from './QuestionCounter'

export default function Checkup () {
  return (
    <>
      <MobileProgressBar />
      <QuestionCounter />
      <QuestionBox />
      <AnswerBar />
    </>
  )
}
