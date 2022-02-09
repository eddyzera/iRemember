import React from 'react'
import { Link } from 'react-router-dom'
import { FcCalendar, FcApproval, FcCancel } from 'react-icons/fc'

export const Aside: React.FC = () => {
  return (
    <aside className="aside">
      <Link to="/perfil">
        <a className="perfil">
          <div className="perfil__container">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--M7lfo-Mf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/335826/d074e5ab-472e-417d-a9dd-bcec13063919.jpg"
              alt=""
            />
            <p>Edgar Silva</p>
          </div>
        </a>
      </Link>
      <div className="aside-categories">
        <button className="aside__filter-buttons">
          <FcCalendar /> filtra por 5 dias
        </button>
        <button className="aside__filter-buttons">
          <FcCalendar /> filtra por 15 dias
        </button>
        <button className="aside__filter-buttons">
          <FcCalendar /> filtra por 30 dias
        </button>
        <button className="aside__filter-buttons">
          <FcApproval /> notas arquivadas
        </button>
        <button className="aside__filter-buttons">
          <FcCancel /> notas que passaram do prazo
        </button>
      </div>
    </aside>
  )
}
