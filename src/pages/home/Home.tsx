import React from 'react'
import Header from '../../components/header'
import Search from '../../components/search'

export const Home: React.FC = () => {
  return (
    <>
      <Header isLogged={true} />
      <div className="home">
        <aside>topics</aside>
        <main>
          <Search />
        </main>
      </div>
    </>
  )
}
