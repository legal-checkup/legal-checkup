import * as React from 'react'
import { create } from 'react-test-renderer'
import ResultAccordion from './'

describe('components:results:ResultAccordion', function () {
  const topic = {
    name: 'Money Troubles',
    questions: [
      {
        results: 'The fact that someone is chasing you for money',
        url: 'http://communitylaw.org.nz/community-law-manual/chapter-13-credit-and-debt/what-this-chapter-covers-chapter-13/'
      },
      {
        results: 'The problem you had recently had with a service you have brought',
        url: 'http://communitylaw.org.nz/community-law-manual/chapter-12-consumer-protection/what-this-chapter-covers-chapter-12/'
      }
    ]
  }

  it(`matches the snapshot`, () => {
    expect(create(<ResultAccordion topicObj={topic} />).toJSON()).toMatchSnapshot()
  })
})
