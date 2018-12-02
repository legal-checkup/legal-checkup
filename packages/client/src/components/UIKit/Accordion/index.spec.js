import * as React from 'react'
import { create } from 'react-test-renderer'
import Accordion from './'

const headingRender = (onClick) => {
  return (
    <div>
      <span>Topic</span><button onClick={onClick}>click me</button>
    </div>
  )
}

const contentRender = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <p>Welcome to the world of Jurassic Park</p>
    </div>
  )
}

describe('components:UIKit:Accordion', () => {
  it('matches the snapshot when default as not expanded', () => {
    expect(create(<Accordion heading={headingRender} content={contentRender} isExpanded={false} />).toJSON()).toMatchSnapshot()
  })

  it('matches the snapshot when default as expanded', () => {
    expect(create(<Accordion heading={headingRender} content={contentRender} isExpanded />).toJSON()).toMatchSnapshot()
  })

  it('matches the snapshot when button clicked on not expanded', () => {
    const component = create(<Accordion heading={headingRender} content={contentRender} isExpanded={false} />)
    component.root.findByType('button').props.onClick()
    expect(JSON.stringify(component.toJSON())).toEqual(JSON.stringify(create(<Accordion heading={headingRender} content={contentRender} isExpanded />).toJSON()))
  })
})
