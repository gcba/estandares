import React from "react"

interface NavigatorProps {
  prev: {
    title: string
    url: string
  }
  next: {
    title: string
    url: string
  }
}

export const Navigator = (props: NavigatorProps) => {
  const { prev, next } = props
  return (
    <div className="pagination">
      <div className="page-navigation">
        <div className="page-item">
          {prev && (
          <a href={prev.url} className="btn page-link">
            <span className="page-previous-icon" aria-hidden="true"></span>
            <span className="page-next-text">{prev.title}</span>
          </a>
          )}
        </div>
        <div className="page-item">
          {next && (
          <a className="btn page-link" href={next.url}>
            <span className="page-next-text">{next.title}</span>
            <span className="page-next-icon" aria-hidden="true"></span>
          </a>
          )}
        </div>
      </div>
    </div>
  )
}
