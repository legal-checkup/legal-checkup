import * as React from 'react'

export default function ResultTopicHeader ({ name = '...', onClick }) {
  return (
    <div>
      <span>{name}</span><button onClick={onClick}>show less/more</button>
    </div>
  )
}
