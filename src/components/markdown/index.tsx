import React from "react"
import { withPrefix } from "gatsby"

export const Lead = (props: any) => <p {...props} className="lead" />
export const Img = (props: any) => <img {...props} src={withPrefix(props.src)} className="img-fluid" />
export const Table = (props: any) => <table {...props} className="table table-bordered table-responsive-md" />
