import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../utils/tests/customRender'
import Search from './index'

describe('<Search Form>', () => {
  it('should render component Search', () => {
    const result = render(<Search />)

    expect(result.container.querySelector('.search'))
  })
})
