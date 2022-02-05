import React from 'react'
import {
  MdPerson,
  MdAlternateEmail,
  MdVpnKey,
  MdFacebook
} from 'react-icons/md'
import { AiOutlineGoogle } from 'react-icons/ai'

export const RegisterForm: React.FC = () => {
  return (
    <div className="register-form">
      <form action="">
        <div className="register-input-group">
          <MdPerson color="#8a939b" />
          <input type="text" placeholder="Digite o seu nome..." />
        </div>
        <div className="register-input-group">
          <MdAlternateEmail color="#8a939b" />
          <input type="email" placeholder="Digite o seu e-mail..." />
        </div>
        <div className="register-input-group">
          <MdVpnKey color="#8a939b" />
          <input type="password" placeholder="Digite o seu password..." />
        </div>
        <div className="register-input-group">
          <MdVpnKey color="#8a939b" />
          <input type="password" placeholder="Confirme o seu password..." />
        </div>
        <div className="register-button">
          <button className="register-button__create">Criar</button>
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
