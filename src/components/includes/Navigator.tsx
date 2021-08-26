import React from "react"
import { NavigatorProps } from "../../types/components/includes/"

export const Navigator = (props: NavigatorProps) => {
  const { prev, next } = props
  return (
    <div className="page-navigation">
      <div className="row">
        <div className="col-6">
          {prev && (
            <a href={prev.url} className="page-navigation-prev">
              <i className="bx bxs-chevron-left"></i> {prev.title}
            </a>
          )}
        </div>
        <div className="col-6 text-right">
          {next && (
            <a href={next.url} className="page-navigation-next">
              {next.title} <i className="bx bxs-chevron-right"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
