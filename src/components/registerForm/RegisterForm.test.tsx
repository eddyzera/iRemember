import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import RegisterForm from './index'

describe('<RegisterForm />', () => {
  it('should render component RegisterForm without errros', () => {
    const result = render(<RegisterForm />)
    expect(result.container.querySelector('.register-form'))
  })
})
