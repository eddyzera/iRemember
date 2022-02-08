import React from 'react'
import { MdSearch } from 'react-icons/md'

export const Search: React.FC = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Pesquise..." />
      <button type="submit">
        <MdSearch color="#353840" />
      </button>
    </div>
  )
}
