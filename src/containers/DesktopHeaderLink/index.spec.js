import { mapStateToProps } from '.'
import { state } from '@state/fixtures.js'

describe(`containers:DesktopHeaderLink`, () => {
  describe(`mapStateToProps`, () => {
    it(`should return object containing 'pathname'`, () => {
      expect(mapStateToProps(state)).toEqual({ pathname: '/checkup' })
    })
  })
})
