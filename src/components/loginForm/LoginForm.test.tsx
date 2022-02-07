import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../utils/tests/customRender'
import LoginForm from './index'

describe('<LoginForm />', () => {
  it('should render component LoginForm without errors', () => {
    const result = render(<LoginForm />)
    
    expect(result.container.querySelector('.login-enter')).toBeInTheDocument()
  })
})
