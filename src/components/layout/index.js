import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default ({ format, children }) => {
  return (
    <>
      <Header format={format} />
      {children}
      <Footer format={format} />
    </>
  )
}
