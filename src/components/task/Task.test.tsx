import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../utils/tests/customRender'

describe('<Task />', () => {
  it('should render without errros', () => {
    const result = render(<Task />)
    expect(result.container.querySelector('.task')).toBeInTheDocument()
  })
})
