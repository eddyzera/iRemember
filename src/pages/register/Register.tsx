import React from 'react'
import Header from '../../components/header'
import RegisterForm from '../../components/registerForm'

export const Register: React.FC = () => {
  return (
    <>
      <Header />
      <div className="register">
        <RegisterForm />
      </div>
    </>
  )
}
