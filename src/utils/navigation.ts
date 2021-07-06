import { useStaticQuery, graphql, withPrefix } from "gatsby"
import * as _ from "lodash"
import { NavItem } from "@gcba/obelisco"

export interface Node {
  menu: string
  title: string
  description: string
  position: number
  draft?: boolean
  url: string
  fakeNode?: boolean
  children?: Node[]
}

interface RawNode {
  frontmatter: Pick<Node, "menu" | "title" | "description" | "position" | "draft">
  fields: Pick<Node, "url" | "fakeNode">
}

export interface Data {
  allMdx: {
    nodes: RawNode[]
  }
}

export const getNavigation = (): NavItem[] => {
  const data: Data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___position, order: ASC }, filter: { fields: { url: { ne: "/404/" } } }) {
        nodes {
          frontmatter {
            menu
            title
            description
            position
            draft
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

  const fakeNode = (position: number, menu: string, url: string): RawNode => {
    return { frontmatter: { menu, position, title: "", description: "" }, fields: { url, fakeNode: true } }
  }

  nodes.push(
    fakeNode(1, "Creamos experiencias", "/creamos_experiencias"),
    fakeNode(2, "Guía de estilos", "/guías_de_estilos"),
    fakeNode(3, "Componentes", "/componentes"),
    fakeNode(4, "Contenido", "/contenido"),
    fakeNode(5, "Herramientas y recursos", "/herramientas_y_recursos")
  )

  nodes
    .filter(node => !node.frontmatter.draft)
    .forEach(node => {
      const path = node.fields.url.replace(/^\/|\/$/g, "").replace(/\//g, ".children.")
      const children = _.get(navAsObject, `${path}.children`)
      _.set(navAsObject, path, { ...node.frontmatter, ...node.fields, children })
    })

  const navigationToNavItemsArray = (nav): NavItem[] => {
    return _.sortBy<Node>(Object.values(nav), "position").map((node: Node) => ({
      name: node.menu,
      id: withPrefix(node.url),
      href: withPrefix(node.fakeNode ? Object.values(node.children)[0].url : node.url),
      children: node.children ? navigationToNavItemsArray(node.children) : [],
    }))
  }

  return navigationToNavItemsArray(navAsObject)
}

export const getPrevAndNext = (navigation: NavItem[], current: string) => {
  const flattenChildren = (node: NavItem): NavItem[] => {
    const children = _.flatMap(node.children, flattenChildren)
    delete node.children

    return [node, ...children]
  }

  const getTitleAndUrl = (node: NavItem) => {
    const { name, href } = node
    return { title: name, url: href }
  }

  const nodes = _.flatMap(_.cloneDeep(navigation), flattenChildren).filter(node => node.id === node.href)
  const currentIndex = _.findIndex(nodes, node => node.href === current)

  const prevIndex = currentIndex - 1
  const nextIndex = currentIndex + 1

  return {
    prev: prevIndex >= 0 ? getTitleAndUrl(nodes[prevIndex]) : null,
    next: nextIndex < nodes.length ? getTitleAndUrl(nodes[currentIndex + 1]) : null,
  }
}
