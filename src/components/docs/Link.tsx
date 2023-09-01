import React from 'react';

interface LinkProps {
  textLink: string;
}

const NoRedirectLink = ({ textLink }: LinkProps) => {
  const handleClick = (event) => {
    event.preventDefault(); // Evita la acción predeterminada del enlace
    // Realiza cualquier acción personalizada aquí si es necesario
  };

  return (
    <a href="#" onClick={handleClick}>
      {textLink}
    </a>
  );
};

export default NoRedirectLink;
