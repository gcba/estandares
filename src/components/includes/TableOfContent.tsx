import React from "react"

interface TableOfContentsProps {
  items: {
    title: string;
    url: string;
  }[]
}

export const TableOfContents = (props: TableOfContentsProps) => {
  return <div className="contents">
    <div className="contents-title">Contenido en esta página</div>
    <ul className="list-unstyled">
      {props.items.map(item => <li key={item.url}>
        <a href={item.url}>{item.title}</a>
      </li>)}
    </ul>
  </div>;
}