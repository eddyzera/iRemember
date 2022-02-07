import React from 'react'
import Header from '../../components/header'

export const Home: React.FC = () => {
  return (
    <>
      <Header isLogged={true} />
      <div className="home">
        <h1>Home</h1>
      </div>
    </>
  )
}
