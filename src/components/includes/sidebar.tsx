import { Link, useStaticQuery, graphql, withPrefix } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import React from "react"
import * as _ from "lodash"

interface SidebarProps {
  current: string
}

interface Data {
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

interface Node {
  menu: string
  title: string
  description: string
  url: string
  position: number
  children?: Node[]
}

const Sidebar = (props: SidebarProps) => {
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

  const isIndex = node => node.fields.url === "/"
  const nodes = _.cloneDeep(data.allMdx.nodes)
  const indexData = nodes.find(isIndex)
  const index: Node = { ...indexData.frontmatter, ...indexData.fields }
  const navigation = {}
  _.remove(nodes, isIndex)

  nodes.forEach(node => {
    const path = node.fields.url.replace(/^\/|\/$/g, "").replace(/\//g, ".children.")
    const children = _.get(navigation, `${path}.children`)
    _.set(navigation, path, { ...node.frontmatter, ...node.fields, children })
  })

  const renderItem = (node: Node, depth: number) => {
    const children = node.children ? Object.values(node.children) : []
    return (
      <React.Fragment key={node.url}>
        <Item menu={node.menu} url={node.url} child={depth > 0} current={props.current} />
        {children.length > 0 && (props.current.indexOf(node.url) === 0 || depth < 1) && (
          <nav className="nav nav-pills flex-column ml-3">
            {_.sortBy(children, "position").map(node => renderItem(node, depth + 1))}
          </nav>
        )}
      </React.Fragment>
    )
  }

  return (
    <nav className="nav flex-column nav-pills">
      {renderItem(index, 0)}
      {_.sortBy(Object.values(navigation), "position").map((node: Node) => (
        <React.Fragment key={node.url}>
          <hr className="w-100 my-3" />
          {renderItem(node, 0)}
        </React.Fragment>
      ))}
    </nav>
  )
}

interface ItemProps {
  menu: string
  child: boolean
  url: string
  current: string
}

const Item = (props: ItemProps) => {
  let className = "nav-link"
  if (props.url === props.current) className += " active"
  className += props.child ? " py-1" : ""

  return (
    <a className={className} href={withPrefix(props.url)}>
      {props.menu}
    </a>
  )
}

export default Sidebar
