import React from 'react'
import Aside from '../../components/aside'
import Header from '../../components/header'
import Search from '../../components/search'
import Task from '../../components/task'

export const Home: React.FC = () => {
  return (
    <>
      <Header isLogged={true} />
      <div className="home">
        <Aside />
        <main>
          <Search />
          <Task />
        </main>
      </div>
    </>
  )
}
