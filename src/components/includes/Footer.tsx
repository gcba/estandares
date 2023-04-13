import React from "react"
import { withPrefix } from "gatsby"

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <section className="d-flex justify-content-between">
          <h4>Formá parte de la comunidad</h4>
          <ul className="list-inline">
            <li className="list-inline-item redes-items">
              <a href="mailto:dgexperienciadigital@gmail.com">
                <i className="bx bx-mail-send"></i>
                Correo
              </a>
            </li>
            <li className="list-inline-item redes-items">
              <a href="//github.com/gcba/estandares/issues">
                <i className="bx bxl-github"></i>
                Github
              </a>
            </li>
            <li className="list-inline-item redes-items">
              <a href="//gcba.github.io/Obelisco/">
                <i className="bx bxl-react"></i>
                Storybook
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={withPrefix("/logo-gcba.svg")}
              alt="Logo del sistema de diseño Obelisco"
              className="img-fluid"
              width="230"
            />
          </div>
          <div className="col-md-6">
            <small className="text-secondary">
              Los contenidos de buenosaires.gob.ar están licenciados bajo Creative Commons Reconocimiento 2.5 Argentina
              License.
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}
