import React from 'react'

import { LOGO_BROWNISH } from '../../../../../constants'

export default function LogoImage () {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      viewBox='0 0 32 32'
    >
      <g fill='none' fillRule='evenodd'>
        <path
          fill='#DCC996'
          d='M5.333 15.238v-4.571h4.572v4.571zM0 15.238V5.333h4.571v9.905zM10.667 9.905V0h4.571v9.905zM5.333 4.571V0h4.572v4.571z'
        />
        <path
          fill={`${LOGO_BROWNISH}`}
          d='M0 0h4.571v4.571H0zM5.333 5.333h4.571v4.571H5.333zM10.667 10.667h4.571v4.571h-4.571z'
        />
        <g>
          <path
            fill='#DCC996'
            d='M22.095 32v-4.571h4.572V32zM16.762 32v-9.905h4.571V32zM27.429 26.667v-9.905H32v9.905zM22.095 21.333v-4.571h4.572v4.571z'
          />
          <path
            fill='#B22D36'
            d='M16.762 16.762h4.57v4.57h-4.57zM22.095 22.095h4.57v4.57h-4.57zM27.429 27.429h4.57v4.57h-4.57z'
          />
        </g>
        <g>
          <path
            fill={`${LOGO_BROWNISH}`}
            d='M16.762 5.333h4.571v4.572h-4.571zM16.762 0h9.905v4.571h-9.905zM22.095 10.667H32v4.571h-9.905zM27.429 5.333H32v4.572h-4.571z'
          />
          <path
            fill='#DCC996'
            d='M32 0v4.571h-4.571V0zM26.667 5.333v4.571h-4.571V5.333zM21.333 10.667v4.571h-4.571v-4.571z'
          />
        </g>
        <g>
          <path
            fill='#B22D36'
            d='M0 22.095h4.571v4.572H0zM0 16.762h9.905v4.571H0zM5.333 27.429h9.905V32H5.333zM10.667 22.095h4.571v4.572h-4.571z'
          />
          <path
            fill='#DCC996'
            d='M10.667 16.762h4.571v4.571h-4.571zM9.905 22.095v4.57h-4.57v-4.57zM4.571 27.429v4.57H.001v-4.57z'
          />
        </g>
      </g>
    </svg>
  )
}
