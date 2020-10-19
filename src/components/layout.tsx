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
import { getNavigation, getPrevAndNext } from "../utils/navigation"

const Layout = (props: any) => {
  const { pageContext, children } = props
  const page = pageContext.frontmatter || pageContext
  const pageContent = pageContext.tableOfContents?.items
  const path = decodeURI(props.path)
  const isIndex = page.url === "/"
  const navigation = getNavigation()

  const prevAndNext = getPrevAndNext(navigation, path)

  return (
    <>
      <Seo title={page.title} description={page.description} />
      <a href="#content" className="sr-only sr-only-focusable">
        Pasar al contenido principal
      </a>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar current={path} navigation={navigation} />
          </div>
          <div className="col-8 offset-1">
            <main id="#content">
              <header>
                <h1>{page.title}</h1>
                <Lead>{page.description}</Lead>
              </header>
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
      }}
    >
      {props.children}
    </MDXProvider>
  )
}
