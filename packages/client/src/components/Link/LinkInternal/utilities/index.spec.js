import {
  getLinkColor,
  getLinkBorder,
  getLinkBackgroundColor,
  getLinkFontWeight
} from '.'

import {
  DESKTOP,
  MOBILE,
  TABLET,
  ROUGE,
  WHITE,
  OFF_WHITE,
  TRANSPARENT
} from '../../../../constants'

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
      expect(getLinkColor(mobileHeaderLinkPropsActive)).toBe(ROUGE)
    })

    it(`returns the correct color for anything that isn't an active header link`, () => {
      expect(getLinkColor(otherLinkProps)).toBe(WHITE)
    })

    it(`returns the correct color when supplied nothing`, () => {
      expect(getLinkColor()).toBe(WHITE)
    })
  })

  describe(`getLinkBorder`, () => {
    it(`returns the correct border for an active ${DESKTOP} header link `, () => {
      expect(getLinkBorder(desktopHeaderLinkPropsActive)).toBe(
        `2px solid ${ROUGE}`
      )
    })

    it(`returns the correct border for an active ${TABLET} header link `, () => {
      expect(getLinkBorder(tabletHeaderLinkPropsActive)).toBe(
        `2px solid ${ROUGE}`
      )
    })

    it(`returns the correct border for an inactive ${DESKTOP} OR ${TABLET} header link `, () => {
      expect(getLinkBorder(desktopHeaderLinkProps)).toBe(
        `2px solid ${TRANSPARENT}`
      )
    })

    it(`returns the correct border for anything that isn't an active ${DESKTOP} OR ${TABLET} header link`, () => {
      expect(getLinkBorder(otherLinkProps)).toBe(null)
    })

    it(`returns the correct border when supplied nothing`, () => {
      expect(getLinkBorder()).toBe(null)
    })
  })

  describe(`getLinkBackgroundColor`, () => {
    it(`returns the correct background color for an active ${MOBILE} header link`, () => {
      expect(getLinkBackgroundColor(mobileHeaderLinkPropsActive)).toBe(
        OFF_WHITE
      )
    })

    it(`returns the correct background color for anything that isn't an active ${MOBILE} header link`, () => {
      expect(getLinkBackgroundColor(otherLinkProps)).toBe(null)
    })

    it(`returns the correct background color when supplied nothing`, () => {
      expect(getLinkBackgroundColor()).toBe(null)
    })
  })

  describe(`getLinkFontWeight`, () => {
    it(`returns the correct font weight for an active ${MOBILE} header link`, () => {
      expect(getLinkFontWeight(mobileHeaderLinkPropsActive)).toBe(900)
    })

    it(`returns the correct font weight for anything that isn't an active ${MOBILE} header link`, () => {
      expect(getLinkFontWeight(otherLinkProps)).toBe(500)
    })

    it(`returns the default font weight when supplied nothing`, () => {
      expect(getLinkFontWeight()).toBe(500)
    })
  })
})
