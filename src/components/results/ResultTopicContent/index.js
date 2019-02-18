import * as React from 'react'
import { addIndex, map } from 'ramda'
import ResultTopicItem from '../ResultTopicItem'

export default function ResultTopicContent ({ format, questions = [] }) {
  const mapIndexed = addIndex(map)

  return (
    <div>
      {mapIndexed(({ results, url }, idx) => <ResultTopicItem key={`tpi_${idx}`} format={format} description={results} link={url} />, questions)}
    </div>
  )
}
