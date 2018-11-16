import 'jest-enzyme'
import 'jest-styled-components'

import Adapter from 'enzyme-adapter-react-16'

import Enzyme from 'enzyme'
import toJson from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

global.toJson = toJson
