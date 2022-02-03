import React from 'react'
import LogoTipo from '../../assets/svg/logo-tipo.svg'
export const Login: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={LogoTipo} alt="iRemember" />
          <h1>iRemember</h1>
        </div>
        <div className="header__button">
          <button className="login">entrar</button>
          <button className="register">cadastrar</button>
        </div>
      </header>
      <div className="login">
        <div className="login__container">
          <div className="login-content">
            <h2>Domine o seu tempo de uma maneira mais facil.</h2>
            <p>
              Estamos aqui para te ajudar a lembrar de suas tarefas do dia a
              dia, uma forma simples sem complicações.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
