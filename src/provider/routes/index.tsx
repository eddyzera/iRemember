import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../../pages/login'
import Register from '../../pages/register'
import Enter from '../../pages/enter'
import Home from '../../pages/home'

export const ProviderRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="enter" element={<Enter />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
