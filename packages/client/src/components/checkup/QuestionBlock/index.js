import * as React from 'react'

import Box from './Box'
import Counter from './Counter'
import ExampleText from './ExampleText'

import { box, counter, exampleText } from '../../../constants'

export default function QuestionBlock ({ format }) {
  return (
    <>
      <Counter data-testid={counter} />
      <Box data-testid={box} format={format} />
      <ExampleText data-testid={exampleText} format={format} />
    </>
  )
}
