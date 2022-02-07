import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../utils/tests/customRender'
import Home from './index'

describe('<Home />', () => {
  it('should render page Home without errors', () => {
    const result = render(<Home />)

    expect(result.container.querySelector('.home')).toBeInTheDocument()
  })
})
