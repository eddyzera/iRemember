import React from 'react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Header from './index'

describe('<Header />', () => {
  it('should render component Header without erros', () => {
    const result = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(result.container.querySelector('.header')).toBeInTheDocument()
  })
})
