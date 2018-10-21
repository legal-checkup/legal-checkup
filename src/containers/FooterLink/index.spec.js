import { mapDispatchToProps } from '.'
import { state } from '@state/constants.js'

describe(`containers:FooterLink`, () => {
  describe(`mapDispatchToProps`, () => {
    it(`should return object containing 'pathname'`, () => {
      expect(mapStateToProps(state)).toEqual({
        pathname: '/privacy-policy'
      })
    })
  })
})
