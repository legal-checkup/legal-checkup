import handleFalsy from '.'
import React from 'react'

const component = <h1>My Cool Component</h1>

describe('utilities:handleFalsy', () => {
  it('returns null when passed falsy check', () => {
    const falsy = ''

    expect(handleFalsy(falsy, component)).toBeNull()
  })

  it('returns component when passed truthy check', () => {
    const truthy = 'True!'

    expect(handleFalsy(truthy, component)).toBe(component)
  })
})
