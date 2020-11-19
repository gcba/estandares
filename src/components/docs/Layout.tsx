import * as React from "react"

export const Row = (props: React.PropsWithChildren<{}>) => (
  <div className="row">
    {props.children}
  </div>
)

export const Col2 = (props: React.PropsWithChildren<{}>) => (
  <div className="col-xs-12 col-md-6">
    {props.children}
  </div>
)

export const Col3 = (props: React.PropsWithChildren<{}>) => (
  <div className="col-xs-12">
    {props.children}
  </div>
)