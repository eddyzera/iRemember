import React from 'react'
import { MdSearch } from 'react-icons/md'

export const Search: React.FC = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Pesquise..." />
      <button type="submit">
        <MdSearch size="1rem" />
      </button>
    </div>
  )
}
