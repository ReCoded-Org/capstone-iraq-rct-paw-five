import React from 'react'
import renderer from 'react-test-renderer'
import Login from './../components/Modals/Login/Login';
it('renders correctly', () => {
    const tree = renderer.create(<Login onHide />).toJSON()
    expect(tree).toMatchSnapshot()
})