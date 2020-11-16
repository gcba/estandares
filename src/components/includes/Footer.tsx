import React from "react"
import { withPrefix } from "gatsby"

export const Footer = () => {
  return (
    <footer>
      <div className="row footer-container">
        <div className="col-md-6 h4">Formá parte de la comunidad</div>
        <div className="col-md-2">
          <a href="mailto:alguien@buenosaires.gob.ar">
            <i className="bx bx-mail-send"></i>
            Correo
          </a>
        </div>
        <div className="col-md-2">
          <a href="//github.com/gcba/estandares">
            <i className="bx bxl-github"></i>
            Github
          </a>
        </div>
        <div className="col-md-2">
          <a href="//dribbble.com/Baux">
            <i className="bx bxl-dribbble"></i>
            Dribbble
          </a>
        </div>
      </div>
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
    </footer>
  )
}
