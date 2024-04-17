import React from "react"

interface TableOfContentsProps {
  items: {
    title: string
    url: string
  }[]
}

export const TableOfContents = (props: TableOfContentsProps) => {
  return (
    <div className="contents">

      <div className="alert alert-primary mb-5" role="alert">
        <p>
          <strong>Esta guía de estilo se encuentra en revisión.</strong> Estamos trabajando en la paleta de colores, por lo que surgirán cambios que afectarán a todo el sistema de diseño.
        </p>
      </div>

      <div className="contents-title">Contenido en esta página</div>
      <ul className="list-unstyled">
        {props.items.map(item => (
          <li key={item.url}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
