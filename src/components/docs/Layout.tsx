import * as React from "react"

export const Row = (props: React.PropsWithChildren<{rowClass: string}>) => {
return <div className={!props.rowClass ? "row" : `row ${props.rowClass}`}>{props.children}</div>}

export const Col = (props: React.PropsWithChildren<{ items: number }>) => {
  const className = props.items > 1 ? `col-xs-12 col-md-${12 / props.items}` : "col-md-10 col-lg-8 col-xl-6"
  return <div className={className}>{props.children}</div>
}

export const Example = (props: React.PropsWithChildren<{ align?: string; transparent?: boolean }>) => {
  const style: { [key: string]: any } = {}
  if (props.align) style.textAlign = props.align

  return (
    <div className={`docs-example ${props.transparent ? "transparent" : ""}`} style={style}>
      {props.children}
    </div>
  )
}
