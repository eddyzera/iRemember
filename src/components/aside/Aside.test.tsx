import React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../utils/tests/customRender'
import { Aside } from './Aside'

describe('<Aside>', () => {
  it('should render component Aside without errors', () => {
    const result = render(<Aside />)

    expect(result.container.querySelector('.aside'))
  })
})
