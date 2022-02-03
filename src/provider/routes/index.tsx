import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../../pages/login'

export const ProviderRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Login} />
      </Routes>
    </BrowserRouter>
  )
}