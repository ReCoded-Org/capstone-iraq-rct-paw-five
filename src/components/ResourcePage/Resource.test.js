import React from 'react'
import { render } from '@testing-library/react'
import Resources from '../../components/ResourcePage/Resources'
describe('navbar', () => {
    test('renders App component', () => {
        render(<Resources />)
    })
})
