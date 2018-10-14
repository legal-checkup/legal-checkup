import Layout from '@containers/Layout'
import React from 'react'
import DesktopProgressBar from '@containers/DesktopProgressBar'
// import TopicQuestions from '@containers/TopicQuestions'

export default function Home () {
  return (
    <Layout>
      <p>
        This is the <strong>Home</strong> page
      </p>
      {/* <TopicQuestions /> */}
      <DesktopProgressBar />
    </Layout>
  )
}
