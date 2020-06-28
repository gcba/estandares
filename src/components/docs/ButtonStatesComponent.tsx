import * as React from "react"
import { Button, ButtonProps } from "react-bootstrap"

export const ButtonStates = (props: { variant: ButtonProps["variant"] }) => (
  <>
    <Button variant={props.variant}>Default</Button>
    <Button variant={props.variant} className="hover">
      Hover
    </Button>
    <Button variant={props.variant} className="active">
      Activo
    </Button>
    <Button variant={props.variant} className="focus">
      con foco
    </Button>
    <Button variant={props.variant} disabled={true}>
      Deshabilitado
    </Button>
  </>
)
