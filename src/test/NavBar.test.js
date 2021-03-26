import React from 'react'
import { render } from '@testing-library/react'
import NavBar from '../components/NavBar/NavBar'

describe('navbar', () => {
    test('renders App component', () => {
        render(<NavBar />)
    })
})
