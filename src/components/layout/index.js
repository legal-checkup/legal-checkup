import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LayoutWrapper from './LayoutWrapper'
import Content from './Content'

export default ({ format, children }) => {
  return (
    <>
      <LayoutWrapper>
        <Header format={format} />
        <Content>{children}</Content>
        <Footer format={format} />
      </LayoutWrapper>
    </>
  )
}
