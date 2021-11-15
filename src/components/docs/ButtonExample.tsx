import * as React from "react"
import { Button, ButtonType } from "@gcba/obelisco"

type Size = "default" | "small" | "large"

export const ButtonExample = (props: { variant: ButtonType; showDisabled: boolean; size: Size }) => {
  let { variant, size, showDisabled } = props
  if (!size) size = "large"

  return (
    <div className="buttons-showcase">
      <Button type={variant} size={size}>
        Default
      </Button>
      <Button type={variant} size={size} className="active">
        Hover
      </Button>
      <Button type={variant} size={size} className="active focus">
        Activo
      </Button>
      <Button type={variant} size={size} className="focus">
        con foco
      </Button>
      {showDisabled && (
        <Button type={variant} size={size} disabled={true}>
          Deshabilitado
        </Button>
      )}
    </div>
  )
}

export const ButtonSizeExample = ({ size }: { size: Size }) => (
  <div className="buttons-showcase">
    <Button type="primary" size={size}>
      Primario
    </Button>
    <Button type="secondary" size={size}>
      Secundario
    </Button>
    <Button type="success" size={size}>
      Éxito
    </Button>
    <Button type="danger" size={size}>
      Peligro
    </Button>
    <Button type="link" size={size}>
      Fantasma
    </Button>
  </div>
)
