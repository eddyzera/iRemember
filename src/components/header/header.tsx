import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdNotificationsNone } from 'react-icons/md'
import LogoTipo from '../../assets/svg/logo-tipo.svg'
import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({
  isLogged = false
}: HeaderProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const handleOpenMenu = () => {
    setIsOpenMenu((state) => !state)
  }
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={LogoTipo} alt="iRemember" />
          <h1>iRemember</h1>
        </Link>
      </div>
      {isLogged ? (
        <div className="header-logged">
          <button className="header-logged__create">criar nota</button>
          <Link to="/notification" className="header-logged__notification">
            <MdNotificationsNone />
          </Link>
          <div className="header-logged__perfil" onClick={handleOpenMenu}>
            <button className="header-perfil">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--M7lfo-Mf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/335826/d074e5ab-472e-417d-a9dd-bcec13063919.jpg"
                alt=""
              />
            </button>
            {isOpenMenu && (
              <ul className="header-menu">
                <li>
                  <Link to="/perfil">Ed Silva</Link>
                </li>
                <div className="separator"></div>
                <li>
                  <button>sair</button>
                </li>
              </ul>
            )}
          </div>
        </div>
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
