import * as React from "react"
import { withPrefix } from "gatsby"

interface CardProps {
  title: string
  description: string
  linkText: string
  linkUrl: string
  icon?: {
    name: string
    color: string
  }
}

export const Card = (props: CardProps) => (
  <div className="docs-card">
    {props.icon && <i className={`bx ${props.icon.name}`} style={{ color: props.icon.color }}></i>}
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <a href={withPrefix(props.linkUrl)}>{props.linkText} <i className='bx bx-right-arrow-alt' ></i></a>
  </div>
)
