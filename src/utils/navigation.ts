import { useStaticQuery, graphql } from "gatsby"
import * as _ from "lodash"

export interface Data {
  allMdx: {
    nodes: Array<{
      frontmatter: {
        menu: string
        title: string
        description: string
        position: number
      }
      fields: {
        url: string
      }
    }>
  }
}

export interface Node {
  menu: string
  title: string
  description: string
  url: string
  position: number
  children?: Node[]
}

export const getNavigation = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___position, order: ASC }, filter: { fields: { url: { ne: "/404/" } } }) {
        nodes {
          frontmatter {
            menu
            title
            description
            position
          }
          fields {
            url
          }
        }
      }
    }
  `)

  const nodes = _.cloneDeep(data.allMdx.nodes)
  const navAsObject = {}

  const fakeNode = (position: number, menu: string, url: string) => {
    return { frontmatter: { menu, position, title: "", description: "" }, fields: { url } }
  }

  nodes.push(
    fakeNode(1, "Creando experiencias", "/creando_experiencias"),
    fakeNode(2, "Guía de estilos", "/guías_de_estilos"),
    fakeNode(3, "Componentes", "/componentes"),
    fakeNode(4, "Contenido", "/contenido"),
    fakeNode(5, "Herramientas y recursos", "/herramientas_y_recursos")
  )

  nodes.forEach(node => {
    const path = node.fields.url.replace(/^\/|\/$/g, "").replace(/\//g, ".children.")
    const children = _.get(navAsObject, `${path}.children`)
    _.set(navAsObject, path, { ...node.frontmatter, ...node.fields, children })
  })

  const navigationToArrays = nav => {
    return _.sortBy(Object.values(nav), "position").map((node: Node) => ({
      ...node,
      children: node.children ? navigationToArrays(node.children) : [],
    }))
  }

  return navigationToArrays(navAsObject)
}

export const getPrevAndNext = (navigation: Node[], current: string) => {
  const flattenChildren = (node: Node): Node[] => {
    const children = _.flatMap(node.children, flattenChildren)
    delete node.children

    return [node, ...children]
  }

  const getTitleAndUrl = (node: Node) => {
    const { menu, url } = node
    return { title: menu, url }
  }

  const nodes = _.flatMap(_.cloneDeep(navigation), flattenChildren).filter(node => !!node.title)
  const currentIndex = _.findIndex(nodes, node => node.url === current)

  const prevIndex = currentIndex - 1
  const nextIndex = currentIndex + 1

  return {
    prev: prevIndex >= 0 ? getTitleAndUrl(nodes[prevIndex]) : null,
    next: nextIndex < nodes.length ? getTitleAndUrl(nodes[currentIndex + 1]) : null,
  }
}
