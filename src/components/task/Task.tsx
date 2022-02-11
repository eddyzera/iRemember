import React from 'react'

export const Task: React.FC = () => {
  return (
    <div className="task">
      <div className="task-container">
        <h2>Festa de Aniversário da Livia</h2>
        <div className="task-category">
          <p>#diverção</p>
          <p>#festa</p>
        </div>
        <ul className="task-list">
          <li className="task-list__item">Comprar presente</li>
          <li className="task-list__item">Comprar roupa nova</li>
        </ul>
      </div>
      <div className="task-date">
        <button className="task-date__date-event">abril 10 de 2020</button>
        <button className="task-date__date-create">abril 5 de 2020</button>
      </div>
    </div>
  )
}
