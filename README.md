| :exclamation: Este contenido está en desarrollo. |
| ------------------------------------------------ |


# Estándares de experiencia digital

Documentación de los estándares para la experiencia digital del GCBA.
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

```markdown
---
menu: Web
title: Componentes para web
description: Sistema de componentes para aplicaciones web.
position: 1
---

{ Contenido de la documentación en formato markdown }

```

> **Importante**: El contenido de las páginas de la documentación no puede estar vacío, siempre es necesario que estén presentes todos los metadatos y por lo menos una línea de texto en el contenido. 

### Imágenes y archivos

Si se quieren incrustar imágenes o enlazar archivos, por ejemplo un PDF o ZIP, se deben agregar en la carpeta `static`. Dentro de esa carpeta, se pueden crear las que quieran para organizar los archivos y se respeta en la url.

Por ejemplo, para agregar una imagen que se agregó en la carpeta `static/pautas/accesibilidad` y que tiene el nombre `barreras.png`, se debe usar el formato markdown de esta forma:

```markdown
![texto alternativo](/pautas/accesibilidad/barreras.png)
```

Para enlazar otro tipo de archivos que no sean imágenes, se debe uzar un hipervínculo de esta forma:

```markdown
Para comenzar a trabajar, [descargá el UI kit](/pautas/diseño/ui-kit.zip).
```

> **Importante**: Las imágenes o archivos PDF deben ser recursos accesorios que den soporte a la documentación. No es recomendable utilizar imágenes con texto como parte principal del contenido, ni vincular a archivos externos que tengan toda la información.

## Publicación

La publicación de los contenidos en formato web dentro de `gihub-pages` es automática luego de cada actualización en la rama `master` del repositorio.

Si se quiere trabajar en contenidos no finales, deber crearse una nueva rama con un nombre descriptivo del cambio realizado con palabras separadas por guiones. Por ejemplo, si se está agregando una nueva sección de links útiles, el nombre podría ser `agrega-seccion-links-utiles`.

Una vez que se quieren publicar esos contenidos, debe _mergearse_ esa rama en `master` por medio de un _pull request_.

## Desarrollo

para instalar el proyecto localmente, primero debemos clonarlo y correr los siguientes comandos:

```bash
# Instalar las dependencias
npm install

# Iniciar el proyecto
npm start
```
