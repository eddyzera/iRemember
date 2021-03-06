import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../utils/tests/customRender'
import Header from './index'

describe('<Header />', () => {
  it('should render component Header without erros', () => {
    const result = render(<Header />)

    expect(result.container.querySelector('.header')).toBeInTheDocument()
  })
})
