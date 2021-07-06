import * as React from "react"
import { Nav } from "@gcba/obelisco"

export const NavExample: React.FC = () => {
  const [selected, setSelected] = React.useState<string>("1.2.2")

  const items = [
    {
      name: "Nivel 1",
      id: "1",
      children: [
        { name: "Anidado Nivel 2", id: "1.1" },
        {
          name: "Anidado Nivel 2.1",
          id: "1.2",
          children: [
            { name: "Anidado Nivel 3", id: "1.2.1" },
            { name: "Anidado Nivel 3.1", id: "1.2.2" },
            { name: "Anidado Nivel 3.2", id: "1.2.3" },
          ],
        },
        { name: "Anidado Nivel 2.2", id: "1.3" },
        { name: "Anidado Nivel 2.3", id: "1.4" },
      ],
    },
    {
      name: "Nivel 2",
      id: "2",
      children: [
        { name: "Anidado Nivel 2", id: "2.1" },
        {
          name: "Anidado Nivel 2.1",
          id: "2.2",
          children: [
            { name: "Anidado Nivel 3", id: "2.2.1" },
            { name: "Anidado Nivel 3.1", id: "2.2.2" },
            { name: "Anidado Nivel 3.2", id: "2.2.3" },
          ],
        },
        { name: "Anidado Nivel 2.2", id: "2.3" },
        { name: "Anidado Nivel 2.3", id: "2.4" },
      ],
    },
  ]

  return <Nav items={items} selected={selected} onClick={id => setSelected(id)} />;
}
