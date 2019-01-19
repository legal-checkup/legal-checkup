import * as React from 'react'
import { addIndex, map } from 'ramda'
import ResultTopicItem from '../ResultTopicItem'

export default function ResultTopicContent ({ questions = [] }) {
  const mapIndexed = addIndex(map)

  return (
    <div>
      {mapIndexed(({ results, url }, idx) => <ResultTopicItem key={`tpi_${idx}`} description={results} link={url} />, questions)}
    </div>
  )
}
