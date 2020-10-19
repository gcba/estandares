import React from "react"

export const Footer = () => {
  return (
    <footer>
      <div className="row footer-container">
        <div className="col-6 h4">Formá parte de la comunidad</div>
        <div className="col-2">
          <i className="bx bxl-dribbble"></i>
          Dribbble
        </div>
        <div className="col-2">
          <i className="bx bxl-github"></i>
          Github
        </div>
        <div className="col-2">
          <i className="bx bx-mail-send"></i>
          Mail
        </div>
      </div>
      <div className="row">
        <div className="col-6">Logo ciudad</div>
        <div className="col-6">
          <small className="text-secondary">
            Los contenidos de buenosaires.gob.ar están licenciados bajo Creative Commons Reconocimiento 2.5 Argentina
            License.
          </small>
        </div>
      </div>
    </footer>
  )
}
