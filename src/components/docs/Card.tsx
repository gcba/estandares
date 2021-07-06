import * as React from "react"
import { withPrefix } from "gatsby"
import { Card as BaseCard, SimpleCard as BaseSimpleCard, CardProps, SimpleCardProps } from "@gcba/obelisco"
import { CardImage } from "@gcba/obelisco/dist/components/Card"

export const Card = (props: React.PropsWithChildren<CardProps>) => {
  props = addCardPrefix(props)
  return <BaseCard {...props} />
}

export const SimpleCard = (props: React.PropsWithChildren<SimpleCardProps>) => {
  props = addSimpleCardPrefix(props)
  return <BaseSimpleCard {...props} />
}

const addSimpleCardPrefix = (props: SimpleCardProps): SimpleCardProps => {
  return { ...props, href: addPrefixToLocalUrl(props.href) }
}

const addCardPrefix = (props: CardProps) => {
  const picture = (props.picture as CardImage)?.src
    ? {
        ...props.picture,
        src: addPrefixToLocalUrl((props.picture as CardImage).src),
      }
    : props.picture

  return {
    ...props,
    picture,
    href: addPrefixToLocalUrl(props.href),
  }
}

const addPrefixToLocalUrl = (url?: string) => {
  return (url && !url.includes("//") && withPrefix(url)) || url
}
