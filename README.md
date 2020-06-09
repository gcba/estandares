| :exclamation:  Este contenido está en desarrollo. |
|---------------------------------------------------|


  
</p>

# Estándares de experiencia digital

Documentación de los estándares para de experiencia digital del GCBA.
El proyecto utiliza [Gatsby](https://www.gatsbyjs.org/) como base para generar páginas estáticas en base a archivos markdow.

## Instalación

para instalar el proyecto localmente primero debemos clonarlo y correr los siguientes comandos:

```
# Instalar las dependencias
npm install

# Iniciar el proyecto
npm start
````

## Modificación de la documentación

Todos los contenidos están escritos en un formato llamado [MDX](https://mdxjs.com/).
MDX está basado en [Mark Down](https://www.markdownguide.org/), pero también permite la utilización de componentes [JSX](https://reactjs.org/docs/introducing-jsx.html) embebidos.

### Estructura de archivos

Las páginas se encuentran en el directorio `src/pages` y mantienen la estructura de carpetas definidas por la navegación.
Por ejemplo, la página de la documentación `/recursos/componentes/web` debe ser `/src/pages/recursos/compoentes/web.mdx`.

Cada carpeta que se genere, debe tener un archivo asignado al mismo nivel que la carpeta y con el mismo nombre.
Para el caso del ejemplo anterio debería ser:

```
/pages
  recursos.mdx
  /recursos
    componentes.mdx
    /componentes
      web.mdx
``` 

### Metadatos

Cada página tiene en las primeras líneas una sección donde se definen los metadatos necesarios. Esta sección se denomina `frontmatter`.

Los metadas son:

| nombre      | tipo de dato | ejemplo                                       | notas                                                                                           |
|-------------|--------------|-----------------------------------------------|-------------------------------------------------------------------------------------------------|
| title       | texto        | Componentes para web                          | Es el nombre utilizado en el encabezado de la página, la navegación y el título de la pestaña.  |
| description | texto        | Sistema de componentes para aplicaciones web. | Es la descripción que se muestra debajo del título y al mostrar resultados en un buscador.      |
| position    | número       | 1                                             | Es el número de posición que debe tener ese elemento respecto de sus hermanos en la navegación. |


Siguiendo con el ejemplo de la página de componentes para web, los metadatos deberían ser:

```
---
title: Web
description: Sistema de componentes para aplicaciones web.
position: 1
---

{ Contenido de la documentación en formato markdown }

```

## Publicación

La publicación de los contenidos en formato web dentro de gihub-pages es automática luego de cada push a la branch `master` repositorio.
Si se quiere trabajar en contenidos no finales, deber crearse una nueva branch con un nombre descriptivo del cambio realizado con el subfijo `dev-` y luego mergear a `master`.
