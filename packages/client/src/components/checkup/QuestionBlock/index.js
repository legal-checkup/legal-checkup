import * as React from 'react'

import Box from './Box'
import Counter from './Counter'
import ExampleText from './ExampleText'

import { box, counter, exampleText } from '../../../constants'

export default function QuestionBlock () {
  return (
    <>
      <Counter data-testid={counter} />
      <Box data-testid={box} />
      <ExampleText data-testid={exampleText} />
    </>
  )
}
