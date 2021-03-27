import React from 'react'
import { render } from '@testing-library/react'
import Login from '../../components/Modals/Login/Login'

describe('navbar', () => {
    test('renders App component', () => {
        render(<Login onHide />)
    })
})
