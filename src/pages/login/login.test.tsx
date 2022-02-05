import React from 'react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Login from './index'

describe('<Login>', () => {
  it('should render the page login without erros', () => {
    const result = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
    expect(result.container.querySelector('.login')).toBeInTheDocument()
  })
})
