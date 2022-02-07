import React from 'react'
import { MdAlternateEmail, MdFacebook, MdVpnKey } from 'react-icons/md'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ILoginForm } from './types'
import { AiOutlineGoogle } from 'react-icons/ai'
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
        <h2>Falta muito pouco para começarmos !</h2>
        <p>Como deseja Entrar ?</p>
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
        <div className="login-button">
          <button className="login-button__login" type="submit">
            Enviar
          </button>
          <button className="login-button__facebook">
            <div className="login-button-group">
              <MdFacebook size="1.5rem" color="#FFF" />
              facebook
            </div>
          </button>
          <button className="login-button__google">
            <div className="login-button-group">
              <AiOutlineGoogle size="1.5rem" color="#FFF" />
              google
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}
