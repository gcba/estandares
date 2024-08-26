import React from "react";

interface TableOfContentsProps_Alert {
  alertText: string
}

export const TableOfContentsAlert = (props: TableOfContentsProps_Alert) => {
  return (
    <div className="alert alert-primary mb-5" role="alert">
      <p><strong>Esta guía de estilo se encuentra en revisión.</strong> {props.alertText}</p>
    </div>

  );
};
