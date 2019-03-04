import * as React from 'react'

import Box from './Box'
import Counter from './Counter'
import ExampleText from './ExampleText'

import { box, counter, exampleText, DESKTOP } from '../../../constants'

export default function QuestionBlock ({ format }) {
  return (
    <>
      {format === DESKTOP ? null : (
        <Counter data-testid={counter} format={format} />
      )}
      <Box format={format} data-testid={box} />
      <ExampleText format={format} data-testid={exampleText} />
    </>
  )
}
