import React from 'react'
import { render } from '@testing-library/react'
import Slider from '../../components/Slider/Slider'

describe('Slider', () => {
  test('renders App component', () => {
    render(

          <Slider pets={[]}/>

    )
  })
})
