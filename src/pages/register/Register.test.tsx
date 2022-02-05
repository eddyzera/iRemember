import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../utils/tests/customRender'
import Register from './index'

describe('<Register />', () => {
  it('should render page Register without errors', () => {
    const result = render(<Register />)
    expect(result.container.querySelector('.register')).toBeInTheDocument()
  })
})
