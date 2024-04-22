import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import * as _ from "lodash"
import "../styles/main.scss"

import { Sidebar } from "./includes/Sidebar"
import { TableOfContents } from "./includes/TableOfContent"
import { Footer } from "./includes/Footer"
import { Navigator } from "./includes/Navigator"
import Seo from "./seo"
import { Img, Table, Lead } from "./markdown"
import { Row, Col, Example } from "./docs/Layout"
import { Color } from "./docs/Color"
import { Card, SimpleCard } from "./docs/Card"
import { getNavigation, getPrevAndNext } from "../utils/navigation"
import { withPrefix } from "gatsby"
import { TableOfContentsAlert } from "./includes/ProvisorAlert"

const Layout = (props: any) => {
  const { pageContext, children } = props
  const page = pageContext.frontmatter || pageContext
  const pageContent = pageContext.tableOfContents?.items
  const path = decodeURI(props.location.pathname)
  const isIndex = page.url === "/"
  const navigation = getNavigation()

  const prevAndNext = getPrevAndNext(navigation, path)

  return (
    <>
      <Seo title={page.title} description={page.description} />
      <a href="#content" className="sr-only sr-only-focusable">
        Pasar al contenido principal
      </a>
      <div className="d-block d-md-none">
        <Sidebar current={path} navigation={navigation} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <Sidebar current={path} navigation={navigation} />
          </div>
          <div className="col-md-8 offset-md-1">
            <main id="content">
              <header>
                {isIndex && (
                  <img
                    src={withPrefix("/estandares.svg")}
                    alt="Ilustración que muestra un flujo de cómo construir una idea"
                    className="img-fluid mb-5"
                  />
                )}
                <h1>{page.title}</h1>
                <Lead>{page.description}</Lead>
              </header>

              {path == '/estandares/guías_de_estilos/paleta_de_colores/' && <TableOfContentsAlert alertText={"Estamos trabajando en la paleta de colores, por lo que surgirán cambios que afectarán a todo el sistema de diseño."} />}

              {path == '/estandares/guías_de_estilos/tipografia/' && <TableOfContentsAlert alertText={" Estamos trabajando en la escala tipográfica, por lo que surgirán cambios que afectarán a todo el sistema de diseño."} />}

              {!isIndex && !!pageContent && <TableOfContents items={pageContent} />}


              <article>
                <MdxContent>{children ? children : <MDXRenderer>{pageContext.body}</MDXRenderer>}</MdxContent>
              </article>

              <Navigator {...prevAndNext} />
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout

const MdxContent = (props: any) => {
  return (
    <MDXProvider
      components={{
        img: Img,
        table: Table,
        Lead,
        Navigator,
        Row,
        Col,
        Color,
        Example,
        Card,
        SimpleCard,
      }}
    >
      {props.children}
    </MDXProvider>
  )
}
