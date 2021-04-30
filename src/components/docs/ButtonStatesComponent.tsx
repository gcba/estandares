import * as React from "react"
import { Button, ButtonType } from "@gcba/obelisco"

export const ButtonStates = (props: { variant: ButtonType; showDisabled: boolean }) => (
  <div className="buttons-showcase">
    <Button type={props.variant}>Default</Button>
    <Button type={props.variant} className="active">
      Hover
    </Button>
    <Button type={props.variant} className="active focus">
      Activo
    </Button>
    <Button type={props.variant} className="focus">
      con foco
    </Button>
    {props.showDisabled && (
      <Button type={props.variant} disabled={true}>
        Deshabilitado
      </Button>
    )}
  </div>
)
