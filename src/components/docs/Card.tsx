import * as React from "react"
import { withPrefix, navigate } from "gatsby"

interface BaseCardProps {
  title: string
  description: string
  linkUrl: string
  icon?: {
    name: string
    color: string
  }
}

interface CardProps extends BaseCardProps {
  img?: string
}

export const Card = (props: React.PropsWithChildren<CardProps>) => (
  <button className="card" onClick={() => navigate(props.linkUrl)}>
    {props.img && <img src={withPrefix(props.img)} className="card-img-top" />}
    <div className="card-body">
      {props.icon && <i className={`card-icon bx ${props.icon.name} `} style={{ color: props.icon.color }}></i>}
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text">{props.description}</p>
    </div>
  </button>
)

interface SimpleCardProps extends BaseCardProps {
  linkText: string
}

export const SimpleCard = (props: React.PropsWithChildren<SimpleCardProps>) => (
  <div className="card card-simple">
    <div className="card-body">
      {props.icon && <i className={`card-icon bx ${props.icon.name} `} style={{ color: props.icon.color }}></i>}
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text">{props.description}</p>
      <a href={props.linkUrl.includes("//") ? props.linkUrl : withPrefix(props.linkUrl)} className="link-arrow">{props.linkText}</a>
    </div>
  </div>
)