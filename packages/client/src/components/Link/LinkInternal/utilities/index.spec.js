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

  tabletHeaderLinkProps: {
    format: `${TABLET}Header`
  },

  tabletHeaderLinkPropsActive: {
    format: `${TABLET}Header`,
    active: true
  },

  mobileHeaderLinkProps: {
    format: `${MOBILE}Header`
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
  // tabletHeaderLinkProps,
  tabletHeaderLinkPropsActive,
  // mobileHeaderLinkProps,
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
  })

  describe(`getLinkFontWeight`, () => {
    it(`returns the correct font weight for an active ${MOBILE} header link`, () => {
      expect(getLinkFontWeight(mobileHeaderLinkPropsActive)).toMatchSnapshot()
    })

    it(`returns the correct font weight for anything that isn't an active ${MOBILE} header link`, () => {
      expect(getLinkFontWeight(otherLinkProps)).toMatchSnapshot()
    })
  })
})
