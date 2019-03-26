import { createContext } from 'react'
import { MOBILE } from '../../../constants'

const FormatContext = createContext(MOBILE)
export const {
  Provider: FormatProvider,
  Consumer: FormatConsumer
} = FormatContext
