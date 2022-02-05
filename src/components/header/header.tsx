import React from 'react'
import { Link } from 'react-router-dom'
import LogoTipo from '../../assets/svg/logo-tipo.svg'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={LogoTipo} alt="iRemember" />
        <h1>iRemember</h1>
      </div>
      <div className="header__button">
        <a className="login">entrar</a>
        <Link to="/register">
          <a className="register">cadastrar</a>
        </Link>
      </div>
    </header>
  )
}
