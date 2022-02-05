import React from 'react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import RegisterForm from './index'

describe('<RegisterForm />', () => {
  it('should render component RegisterForm without errros', () => {
    const result = render(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    )
    expect(result.container.querySelector('.register-form'))
  })
})
