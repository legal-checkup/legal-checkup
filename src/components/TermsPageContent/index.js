import React from 'react'

import { PageHeading, PageText } from '../styled'

export default function TermsPageContent ({ format }) {
  return (
    <>
      <PageHeading format={format}>Terms of Use</PageHeading>
      <PageText format={format}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut
        nibh purus. Morbi luctus mi eu nunc tristique, id porta leo fermentum.
        Vestibulum lectus velit, vestibulum sit amet auctor sed, fermentum et
        velit. Duis rhoncus erat sed gravida ullamcorper. Curabitur ultrices
        lorem neque, nec imperdiet enim faucibus ac. Etiam interdum purus id
        magna viverra, ut malesuada ligula tristique. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nulla facilisis porta nulla, et
        fermentum leo dictum non.
      </PageText>
    </>
  )
}
