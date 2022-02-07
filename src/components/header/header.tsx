import React from 'react'
import { Link } from 'react-router-dom'
import LogoTipo from '../../assets/svg/logo-tipo.svg'
import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({
  isLogged = false
}: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={LogoTipo} alt="iRemember" />
          <h1>iRemember</h1>
        </Link>
      </div>
      {isLogged ? (
        <div>Logado</div>
      ) : (
        <div className="header__button">
          <Link to="/enter">
            <a className="login">entrar</a>
          </Link>
          <Link to="/register">
            <a className="register">cadastrar</a>
          </Link>
        </div>
      )}
    </header>
  )
}
