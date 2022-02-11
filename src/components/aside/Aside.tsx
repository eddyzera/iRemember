import React from 'react'
import { Link } from 'react-router-dom'
import { FcCalendar, FcApproval, FcCancel } from 'react-icons/fc'

export const Aside: React.FC = () => {
  return (
    <aside className="aside">
      <button className="aside__filter-buttons">
        <FcCalendar /> filtrar por 5 dias
      </button>
      <button className="aside__filter-buttons">
        <FcCalendar /> filtrar por 15 dias
      </button>
      <button className="aside__filter-buttons">
        <FcCalendar /> filtrar por 30 dias
      </button>
      <button className="aside__filter-buttons">
        <FcApproval /> notas arquivadas
      </button>
      <button className="aside__filter-buttons">
        <FcCancel /> notas que passaram do prazo
      </button>
    </aside>
  )
}
