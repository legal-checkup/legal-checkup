import * as React from 'react'

import Box from './Box'
import Counter from './Counter'
import ExampleText from './ExampleText'

export default function QuestionBlock ({ format }) {
  return (
    <>
      <Counter />
      <Box format={format} />
      <ExampleText format={format} />
    </>
  )
}
