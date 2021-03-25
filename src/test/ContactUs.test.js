  
import React from 'react'
import { render } from '@testing-library/react'
import ContactUs from '../container/ContactUs/ContactUs'

describe('Contact Us', () => {
    test('renders App component', () => {
        render(<ContactUs />)
    })
})