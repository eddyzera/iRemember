import React from 'react'
import Aside from '../../components/aside'
import Header from '../../components/header'
import Search from '../../components/search'

export const Home: React.FC = () => {
  return (
    <>
      <Header isLogged={true} />
      <div className="home">
        <Aside />
        <main>
          <Search />
        </main>
      </div>
    </>
  )
}
