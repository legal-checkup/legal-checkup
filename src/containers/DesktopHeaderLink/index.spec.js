import { mapStateToProps, getPathname } from '.'
import { getRouterLocation } from '@state/selectors'
import { state } from '@state/fixtures.js'

describe(`containers:DesktopHeaderLink`, () => {
  describe(`getPathname`, () => {
    it(`should return the current pathname from the state when there is a current path`, () => {
      expect(getPathname(getRouterLocation(state))).toEqual('/checkup')
    })

    it(`should return an empty string when there is no current path`, () => {
      const noPathnameState = {
        router: {
          location: {
            hash: '',
            key: 'i9oi6x'
          }
        }
      }

      expect(getPathname(getRouterLocation(noPathnameState))).toEqual('')
    })
  })

  describe(`mapStateToProps`, () => {
    it(`should return object containing 'pathname'`, () => {
      expect(mapStateToProps(state)).toEqual({ pathname: '/checkup' })
    })
  })
})
