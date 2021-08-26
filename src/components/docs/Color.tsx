import * as React from "react"
import * as color from "color"
import { ColorProps } from "../../types/components/docs/"

export const Color = (props: React.PropsWithChildren<ColorProps>) => {
  const { name, description, hex } = props
  const current = color(hex)
  const textColor = current.luminosity() > 0.5 ? "dark" : "light"

  const hasDescription = name !== undefined && description !== undefined

  return (
    <div className={`docs-color docs-color-${textColor}`}>
      <div className="docs-color-bg" style={{ backgroundColor: current.hex() }} />

      <div className="docs-color-name">{name}</div>
      {description && <div className="docs-color-description">{description}</div>}

      <dl className={`docs-color-specs ${!hasDescription ? "no-description" : ""}`}>
        <dt>Hex</dt>
        <dd>{current.hex()}</dd>
        <dt>RGB</dt>
        <dd>{current.array().join(", ")}</dd>
      </dl>
    </div>
  )
}
