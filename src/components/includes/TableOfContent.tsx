import React from "react";

interface TableOfContentsProps {
  items: {
    title: string;
    url: string;
  }[];
}

export const TableOfContents = (props: TableOfContentsProps) => {
  // Conjuntos de títulos que queremos verificar
  const paletteTitles = ["Paleta primaria", "Colores semánticos", "Fondos", "Detalles cromáticos"];
  const typographyTitles = ["Familias tipográficas", "Usos", "Unidades", "Formatos de texto", "Diseño y estructura (contexto de uso)", "Usabilidad"];

  // Verificar si alguno de los items tiene uno de los títulos de la paleta o de tipografía
  const hasPaletteItem = props.items.some(
    (item) => paletteTitles.includes(item.title)
  );

  const hasTypographyItem = props.items.some(
    (item) => typographyTitles.includes(item.title)
  );

  return (
    <div className="contents">
      
      {/* Renderizar el div adicional si la condición se cumple */}
      {(hasPaletteItem || hasTypographyItem) && (
        <div className="alert alert-primary" role="alert">
          <p>Esta es la descripción de una alerta de advertencia.</p>
        </div>
      )}

      <div className="contents-title">Contenido en esta página</div>
      <ul className="list-unstyled">
        {props.items.map((item) => (
          <li key={item.url}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
