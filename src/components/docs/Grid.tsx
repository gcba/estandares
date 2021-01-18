import * as React from "react"
import { withPrefix } from "gatsby"

interface GridProps {
  title: string
  description: string
  linkText: string
  linkUrl: string
  icon?: {
    name: string
    color: string
  }
}

export const Grid = (props: React.PropsWithChildren<GridProps>) => (
  <div className="">

  </div>
)