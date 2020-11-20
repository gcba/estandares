import * as React from "react"

export const Row = (props: React.PropsWithChildren<{}>) => (
  <div className="row">
    {props.children}
  </div>
)

export const Col = (props: React.PropsWithChildren<{items: number}>) => (
  <div className={`col-xs-12 col-md-${12 / props.items}`}>
    {props.children}
  </div>
)

export const Example = (props: React.PropsWithChildren<{align?: string}>) => {
  const style: { [key:string]: any} = {};
  if(props.align) style.textAlign = props.align;
  
  return <div className="docs-example" style={style}>
    {props.children}
  </div>;
}