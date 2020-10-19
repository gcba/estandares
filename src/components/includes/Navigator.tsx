import React from "react"
import { Link } from "gatsby"

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
    <div className="navigator">
      <div className="row">
        <div className="col-6">
          {prev && (
            <Link to={prev.url} className="navigator-prev">
              <i className="bx bxs-chevron-left"></i> {prev.title}
            </Link>
          )}
        </div>
        <div className="col-6 text-right">
          {next && (
            <Link to={next.url} className="navigator-next">
              {next.title} <i className="bx bxs-chevron-right"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
