import React from "react"
import { withPrefix } from "gatsby"

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
            <a className="navigator-prev" href={withPrefix(prev.url)}>
              <i className="bx bxs-chevron-left"></i> {prev.title}
            </a>
          )}
        </div>
        <div className="col-6 text-right">
          {next && (
            <a className="navigator-next" href={withPrefix(next.url)}>
              {next.title} <i className="bx bxs-chevron-right"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
