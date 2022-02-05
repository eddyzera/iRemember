import React from 'react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Register from './index'

describe('<Register />', () => {
  it('should render page Register without errors', () => {
    const result = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )
    expect(result.container.querySelector('.register')).toBeInTheDocument()
  })
})
