import React from "react";

interface TableOfContentsProps_Alert {
  alert_text: string
}

export const TableOfContentsAlert = (props: TableOfContentsProps_Alert) => {
  return (
    <div className="alert alert-primary mb-5" role="alert">
      <p><strong>Esta guía de estilo se encuentra en revisión</strong> {props.alert_text}</p>
    </div>

  );
};
