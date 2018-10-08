import { expect } from 'chai'
import React from 'react'
import { mount, render, shallow } from 'enzyme'
import Main from './components/MainComponent';
import App from './App'

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(Main)).to.have.length(1)
  })

  it('should match its reference snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).to.matchSnapshot()
  })
})