import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "bootstrap/dist/css/bootstrap.css"
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from "./includes/header"
import Sidebar from "./includes/sidebar"
import Seo from "./seo"

const Layout = props => {
  const { pageContext, children } = props
  const page = pageContext.frontmatter || pageContext
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const path = decodeURI(props.path)

  return (
    <>
      <Seo title={page.title} description={page.description} />
      <Header title={data.site.siteMetadata.title} current={page.url} />
      <main>
        <div className="container-xl py-4">
          <div className="row">
            <div className="col d-none d-sm-block" style={{ maxWidth: 250 }}>
              <Sidebar current={path} />
            </div>
            <div className="col-12 d-sm-none">
              <button
                className="btn btn-light btn-block mb-4"
                type="button"
                data-toggle="collapse"
                data-target="#sidebarCollapse"
                aria-expanded="false"
                aria-controls="sidebarCollapse"
              >
                Menú de navegación
              </button>
              <div className="collapse pb-4" id="sidebarCollapse">
                <Sidebar current={path} />
              </div>
            </div>
            <div className="col ml-lg-4">
              <h1 className="h2">{page.title}</h1>
              <p>{page.description}</p>
              <hr className="my-4" />
              {children ? children : <MDXRenderer>{pageContext.body}</MDXRenderer>}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Layout
