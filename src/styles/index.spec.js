import baseStyles from '.'

describe('styles', () => {
  it('renders the correct CSS styles', () => {
    expect(baseStyles()).toMatchSnapshot()
  })
})
