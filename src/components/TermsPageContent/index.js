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
      <PageHeading format={format}>Placeholder Text</PageHeading>
      <PageText format={format}>
        Nunc condimentum leo quis dapibus interdum. Proin nec odio quis augue
        interdum ornare ac sed risus. Fusce ultrices commodo ex nec volutpat.
        Nulla dolor eros, porttitor dictum mi et, mollis finibus quam. Aenean in
        porta mi. Integer sed congue enim. Donec lacinia orci lectus, rutrum
        suscipit magna sollicitudin et. Proin tempor ullamcorper mi, nec viverra
        nisl egestas ut. Mauris pulvinar maximus leo, et cursus leo consectetur
        eu. Ut sit amet gravida ex. Etiam consequat arcu eu sagittis mollis.
        Vivamus id mauris pellentesque, vestibulum enim vel, blandit metus. Ut
        ac est nec nibh facilisis tincidunt. Maecenas dictum nec tortor volutpat
        tempus. Morbi sagittis diam at nisl ornare auctor. Phasellus et mauris
        in nisl molestie eleifend a at enim.
      </PageText>
    </>
  )
}
