import * as React from 'react'
import Question from './Question'
import Counter from './Counter'
import ExampleText from './ExampleText'

import { box, counter, exampleText, DESKTOP, TABLET } from '../../../constants'

export default function QuestionBlock ({ format }) {
  return (
    <>
      {format === DESKTOP || format === TABLET ? null : (
        <Counter data-testid={counter} format={format} />
      )}
      <Question format={format} data-testid={box} key={Math.random()} />
      <ExampleText
        format={format}
        data-testid={exampleText}
        key={Math.random()}
      />
    </>
  )
}
