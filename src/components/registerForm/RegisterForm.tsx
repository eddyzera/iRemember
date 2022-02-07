import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  MdPerson,
  MdAlternateEmail,
  MdVpnKey,
  MdFacebook
} from 'react-icons/md'
import { AiOutlineGoogle } from 'react-icons/ai'
import { IRegisterForm } from './types'
import { schema } from './validations'

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IRegisterForm>({ resolver: yupResolver(schema) })
  const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
    console.log('data', data)
  }
  console.log(errors.name?.type)
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`register-input-group ${errors.name?.type ? 'error' : ''}`}
        >
          <MdPerson color="#8a939b" />
          <input
            type="text"
            placeholder="Digite o seu nome..."
            {...register('name', { required: true })}
          />
        </div>
        <small>{errors.name?.message}</small>
        <div
          className={`register-input-group ${
            errors.email?.type ? 'error' : ''
          }`}
        >
          <MdAlternateEmail color="#8a939b" />
          <input
            type="email"
            placeholder="Digite o seu e-mail..."
            {...register('email', { required: true })}
          />
        </div>
        <small>{errors.email?.message}</small>
        <div
          className={`register-input-group ${
            errors.password?.type ? 'error' : ''
          }`}
        >
          <MdVpnKey color="#8a939b" />
          <input
            type="password"
            placeholder="Digite o seu password..."
            {...register('password', { required: true })}
          />
        </div>
        <small>{errors.password?.message}</small>
        <div
          className={`register-input-group ${
            errors.passwordConfirme?.type ? 'error' : ''
          }`}
        >
          <MdVpnKey color="#8a939b" />
          <input
            type="password"
            placeholder="Confirme o seu password..."
            {...register('passwordConfirme', { required: true })}
          />
        </div>
        <small>{errors.passwordConfirme?.message}</small>
        <div className="register-button">
          <button className="register-button__create" type="submit">
            Criar
          </button>
          <button className="register-button__facebook">
            <div className="register-button-group">
              <MdFacebook size="1.5rem" color="#FFF" />
              facebook
            </div>
          </button>
          <button className="register-button__google">
            <div className="register-button-group">
              <AiOutlineGoogle size="1.5rem" color="#FFF" />
              google
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}
