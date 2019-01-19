import * as React from 'react'

export default function ResultTopicItem ({ description, link }) {
  return (
    <p>
      <div>{description}...</div>
      <a href={link}>What does the law say about this</a>
    </p>
  )
}
