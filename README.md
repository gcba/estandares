| :exclamation: Este contenido está en desarrollo. |
| ------------------------------------------------ |


# Estándares de experiencia digital

Documentación de los estándares para de experiencia digital del GCBA.
El proyecto utiliza [Gatsby](https://www.gatsbyjs.org/) como base para generar páginas estáticas en base a archivos markdown.

## Modificación de la documentación

Todos los contenidos están escritos en un formato llamado [MDX](https://mdxjs.com/).

MDX está basado en [Mark Down](https://www.markdownguide.org/), pero también permite la utilización de otros componentes hechos en React dentro del contenido.

### Estructura de archivos

Las páginas se encuentran en el directorio `src/pages` y mantienen la estructura de carpetas definidas por la navegación.
Por ejemplo, la página de la documentación `/recursos/componentes/web` debe ser `/src/pages/recursos/compoentes/web.mdx`.

Cada carpeta que se genere debe tener un archivo con el mismo nombre, y al mismo nivel, que va a definir el contenido de esa sección.

Para el caso del ejemplo anterior debería ser:

```
/pages
  recursos.mdx
  /recursos
    componentes.mdx
    /componentes
      web.mdx
```

### Metadatos

Cada página tiene en las primeras líneas una sección que define los metadatos necesarios. Esta sección se denomina `frontmatter`.

Los metadas son:

| nombre      | tipo   | ejemplo                                       | notas                                                                                           |
| ----------- | ------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| menu        | texto  | Web                                           | Es el nombre utilizado en la navegación.                                                        |
| title       | texto  | Componentes para Web                          | Es el nombre utilizado en el encabezado de la página y el título de la pestaña.                 |
| description | texto  | Sistema de componentes para aplicaciones web. | Es la descripción que se muestra debajo del título y al mostrar resultados en un buscador.      |
| position    | número | 1                                             | Es el número de posición que debe tener ese elemento respecto de sus hermanos en la navegación. |

Siguiendo con el ejemplo de la página de componentes para web, los metadatos deberían ser:

```
---
menu: Web
title: Componentes para web
description: Sistema de componentes para aplicaciones web.
position: 1
---

{ Contenido de la documentación en formato markdown }

```

## Publicación

La publicación de los contenidos en formato web dentro de `gihub-pages` es automática luego de cada actualización en la rama `master` del repositorio.

Si se quiere trabajar en contenidos no finales, deber crearse una nueva rama con un nombre descriptivo del cambio realizado con palabras separadas por guiones. Por ejemplo, si se está agregando una nueva sección de links útiles, el nombre podría ser `agrega-seccion-links-utiles`.

Una vez que se quieren publicar esos contenidos, debe _mergearse_ esa rama en `master` por medio de un _pull request_.

## Desarrollo

para instalar el proyecto localmente, primero debemos clonarlo y correr los siguientes comandos:

```
# Instalar las dependencias
npm install

# Iniciar el proyecto
npm start
```
