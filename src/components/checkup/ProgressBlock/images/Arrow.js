import React from 'react'

function LeftArrowImage () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 410.12 707.11'
      width='100%'
      height='100%'
    >
      <defs />
      <g fill='none' strokeWidth='80px'>
        <line x1='381.84' y1='28.28' x2='28.28' y2='381.84' />
        <line x1='381.84' y1='678.82' x2='28.28' y2='325.27' />
      </g>
    </svg>
  )
}
// stroke-miterlimit:10

function RightArrowImage () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 410.12 707.11'
      width='100%'
      height='100%'
    >
      <title>lcar</title>
      <g fill='none' strokeWidth='80px'>
        <line x1='28.28' y1='678.82' x2='381.84' y2='325.27' />
        <line x1='28.28' y1='28.28' x2='381.84' y2='381.84' />
      </g>
    </svg>
  )
}

export { LeftArrowImage, RightArrowImage }
