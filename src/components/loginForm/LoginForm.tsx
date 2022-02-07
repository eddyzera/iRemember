import React from 'react'
import { MdAlternateEmail, MdVpnKey } from 'react-icons/md'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ILoginForm } from './types'
export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>()
  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log('data', data)
  }
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="register-input-group">
          <MdAlternateEmail color="#8a939b" />
          <input
            type="email"
            placeholder="Digite o seu e-mail..."
            {...register('email', { required: true })}
          />
        </div>
        <div className="register-input-group">
          <MdVpnKey color="#8a939b" />
          <input
            type="password"
            placeholder="Digite o seu password..."
            {...register('password', { required: true })}
          />
        </div>
      </form>
    </div>
  )
}
