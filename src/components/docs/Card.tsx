import * as React from "react"
import { withPrefix } from "gatsby"
import { Card as BaseCard, SimpleCard as BaseSimpleCard, CardProps, SimpleCardProps } from "@gcba/obelisco"

export const Card = (props: React.PropsWithChildren<CardProps>) => {
  addPrefix(props.href);
  addPrefix(props.picture?.src);
  return <BaseCard {...props} />
}

export const SimpleCard = (props: React.PropsWithChildren<SimpleCardProps>) => {
  addPrefix(props.href);
  return <BaseSimpleCard {...props} />
}

const addPrefix = (url?: string) => {
  if(url && !url.includes("//")) {
    url = withPrefix(url);
  }
}