import 'jest-enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

jasmine.DEFAULT_TIMEOUT_INTERVAL = parseInt(process.env.TIMEOUT || 10000)

Enzyme.configure({ adapter: new Adapter() })
