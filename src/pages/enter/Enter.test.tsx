import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../utils/tests/customRender'
import Enter from './index'
describe('<Enter />', () => {
  it('should render page without erros', () => {
    const result = render(<Enter />)

    expect(result.container.querySelector('.enter'))
  })
})
