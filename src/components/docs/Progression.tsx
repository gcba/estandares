import * as React from "react"

export const ProgessionExample = () => {
  const [isOpen, setOpen] = React.useState<Boolean>(false);
  
  return <div className="progression-container">
    <ul className={`progression ${isOpen ? "expanded" : ""}`}>
      <li className="progression-item completed" aria-expanded="false">
        <p className="progression-title">Estado anterior</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progression-item active" aria-expanded="true">
        <p className="progression-title">Estado actual</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progression-item" aria-expanded="false">
        <p className="progression-title">Próximo estado</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progression-item" aria-expanded="false">
        <p className="progression-title">Próximo estado</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>

      <li className="progression-item" aria-expanded="false">
        <p className="progression-title">Estado final</p>
        <p className="progression-subtitle">Descripción del estado dd/mm/aa - 00:00hs</p>
      </li>
    </ul>

    <button className="progression-link" onClick={() => setOpen(!isOpen)}>
      {isOpen ? "Menos" : "Más"} detalles
    </button>
  </div>;
}
