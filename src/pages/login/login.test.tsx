import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../utils/tests/customRender'
import Login from './index'

describe('<Login>', () => {
  it('should render the page login without erros', () => {
    const result = render(<Login />)
    expect(result.container.querySelector('.login')).toBeInTheDocument()
  })
})
