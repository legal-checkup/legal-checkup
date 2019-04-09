import React from 'react'

import { PageHeading, PageText, PageQuestion } from '../styled'

export default function HelpPageContent ({ format }) {
  return (
    <>
      <PageHeading format={format}>Frequently Asked Questions</PageHeading>
      <PageQuestion>How long does the checkup take?</PageQuestion>
      <PageText format={format}>About 5 minutes to complete.</PageText>
      <PageQuestion>Who should take the checkup?</PageQuestion>
      <PageText format={format}>
        The checkup is for anyone who wants to check their legal health. The
        questions in the checkup are general and will suit most people.
      </PageText>
      <PageQuestion>
        It says I don’t need Legal Help but I’m still worried - what should I
        do?
      </PageQuestion>
      <PageText format={format}>
        Get in touch with your local Community Law centre.
      </PageText>
      <PageQuestion>
        I don’t understand the questions. What can I do?
      </PageQuestion>
      <PageText format={format}>
        We’ve added example text to all the questions we think people could have
        trouble with - but if you find a question that you think needs it,
        please talk to your local Community Law representative.
      </PageText>
      <PageQuestion>What happens to my information?</PageQuestion>
      <PageText format={format}>
        Nothing! We don’t store, save or distribute your information in any way.
        Only you know what you answered, and as soon as you leave the results
        page - no one (including you) can get your results or answers back.
      </PageText>
      <PageQuestion>Can you get my results for me?</PageQuestion>
      <PageText format={format}>
        Sorry we don’t store your answers. But don’t worry, the check-up only
        takes 5 minutes so you can take it again easily.
      </PageText>
      <PageQuestion>
        Something went wrong and I lost my place in the checkup.
      </PageQuestion>
      <PageText format={format}>
        Oh dear. We’re sorry to hear that. Unfortunately there isn’t anything we
        can do to get your progress back. Please start the checkup again - it
        will only take 5 minutes to complete.
      </PageText>
      <PageQuestion>Can I print/email/download my results?</PageQuestion>
      <PageText format={format}>
        Not at this stage! Maybe in a later version.
      </PageText>
    </>
  )
}
