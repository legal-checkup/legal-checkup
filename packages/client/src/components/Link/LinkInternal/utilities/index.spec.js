import {
  getLinkColor,
  getLinkBorder,
  getLinkBackgroundColor,
  getLinkFontWeight
} from '.'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const mockProps = {
  desktopHeaderLinkProps: {
    format: `${DESKTOP}Header`
  },

  desktopHeaderLinkPropsActive: {
    format: `${DESKTOP}Header`,
    active: true
  },

  tabletHeaderLinkPropsActive: {
    format: `${TABLET}Header`,
    active: true
  },

  mobileHeaderLinkPropsActive: {
    format: `${MOBILE}Header`,
    active: true
  },

  otherLinkProps: {
    irrelevantProp: true
  }
}

const {
  desktopHeaderLinkProps,
  desktopHeaderLinkPropsActive,
  tabletHeaderLinkPropsActive,
  mobileHeaderLinkPropsActive,
  otherLinkProps
} = mockProps

describe(`LinkInternal:utilities`, () => {
  describe(`getLinkColor`, () => {
    it(`returns the correct color for an active header link `, () => {
      expect(getLinkColor(mobileHeaderLinkPropsActive)).toMatchSnapshot()
    })

    it(`returns the correct color for anything that isn't an active header link`, () => {
      expect(getLinkColor(otherLinkProps)).toMatchSnapshot()
    })

    it(`returns the correct color when supplied nothing`, () => {
      expect(getLinkColor()).toMatchSnapshot()
    })
  })

  describe(`getLinkBorder`, () => {
    it(`returns the correct border for an active ${DESKTOP} header link `, () => {
      expect(getLinkBorder(desktopHeaderLinkPropsActive)).toMatchSnapshot()
    })

    it(`returns the correct border for an active ${TABLET} header link `, () => {
      expect(getLinkBorder(tabletHeaderLinkPropsActive)).toMatchSnapshot()
    })

    it(`returns the correct border for an inactive ${DESKTOP} OR ${TABLET} header link `, () => {
      expect(getLinkBorder(desktopHeaderLinkProps)).toMatchSnapshot()
    })

    it(`returns the correct border for anything that isn't an active ${DESKTOP} OR ${TABLET} header link`, () => {
      expect(getLinkBorder(otherLinkProps)).toMatchSnapshot()
    })

    it(`returns the correct border when supplied nothing`, () => {
      expect(getLinkBorder()).toMatchSnapshot()
    })
  })

  describe(`getLinkBackgroundColor`, () => {
    it(`returns the correct background color for an active ${MOBILE} header link`, () => {
      expect(
        getLinkBackgroundColor(mobileHeaderLinkPropsActive)
      ).toMatchSnapshot()
    })

    it(`returns the correct background color for anything that isn't an active ${MOBILE} header link`, () => {
      expect(getLinkBackgroundColor(otherLinkProps)).toMatchSnapshot()
    })

    it(`returns the correct background color when supplied nothing`, () => {
      expect(getLinkBackgroundColor()).toMatchSnapshot()
    })
  })

  describe(`getLinkFontWeight`, () => {
    it(`returns the correct font weight for an active ${MOBILE} header link`, () => {
      expect(getLinkFontWeight(mobileHeaderLinkPropsActive)).toMatchSnapshot()
    })

    it(`returns the correct font weight for anything that isn't an active ${MOBILE} header link`, () => {
      expect(getLinkFontWeight(otherLinkProps)).toMatchSnapshot()
    })

    it(`returns the default font weight when supplied nothing`, () => {
      expect(getLinkFontWeight()).toMatchSnapshot()
    })
  })
})
