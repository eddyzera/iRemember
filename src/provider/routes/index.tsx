import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../../pages/login'
import Register from '../../pages/register'

export const ProviderRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
