import React from 'react'

import {
  BlurbWrapper,
  SupportingImage,
  SupportingTextWrapper,
  SupportingTextTitle,
  SupportingTextParagraph
} from '../style'

function Blurb ({ image, title, supportingText, format }) {
  return (
    <BlurbWrapper format={format}>
      <SupportingImage format={format}>{image}</SupportingImage>
      <SupportingTextWrapper>
        <SupportingTextTitle format={format}>{title}</SupportingTextTitle>
        <SupportingTextParagraph format={format}>
          {supportingText}
        </SupportingTextParagraph>
      </SupportingTextWrapper>
    </BlurbWrapper>
  )
}

export default Blurb
