import React from "react"
import { TableOfContentsProps } from '../../types/components/includes/index'

export const TableOfContents = (props: TableOfContentsProps) => {
  return (
    <div className="contents">
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
