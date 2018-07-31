import React from 'react'

import {
  StyledActiveQuestionNumber,
  StyledLockedQuestionNumber,
  StyledUnlockedQuestioNumber
} from '../styled'

export default function QuestionNumber ({
  answeredTotal,
  currentNumber,
  questionNumber
}) {
  if (questionNumber === currentNumber) {
    return (
      <StyledActiveQuestionNumber key={questionNumber}>
        {questionNumber}
      </StyledActiveQuestionNumber>
    )
  }

  if (questionNumber <= answeredTotal) {
    return (
      <StyledUnlockedQuestioNumber key={questionNumber}>
        {questionNumber}
      </StyledUnlockedQuestioNumber>
    )
  }

  return (
    <StyledLockedQuestionNumber key={questionNumber}>
      {questionNumber}
    </StyledLockedQuestionNumber>
  )
}
