import React from 'react'
import { mount } from 'enzyme'
import App from '../App'

describe('<App />', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<App />)
    expect(wrapper.text()).toEqual(expect.stringContaining('App-logo'))
  })
})
