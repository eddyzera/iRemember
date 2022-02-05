import React from 'react'
import { render as testingRender } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

export const render = (ui: React.ReactElement) => {
  const wrapper = <BrowserRouter>{ui}</BrowserRouter>
  return testingRender(wrapper)
}
