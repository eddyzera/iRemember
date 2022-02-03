import React from 'react'
import Header from '../../components/header'
export const Login: React.FC = () => {
  return (
    <>
      <Header />
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
