import React from "react"
import { withPrefix } from "gatsby"
import { Node } from "../../utils/navigation"

interface SidebarProps {
  navigation: Node[]
  current: string
}

export const Sidebar = (props: SidebarProps) => {
  const { navigation, current } = props

  const renderItem = (node: Node, depth: number) => {
    const children = node.children ? Object.values(node.children) : []
    const hasChildren = !!children.length
    const showAsActive = current.indexOf(node.url) === 0 && depth === 0
    return (
      <React.Fragment key={node.url}>
        <Item node={node} current={current} depth={depth} active={showAsActive} />
        {hasChildren && current.indexOf(node.url) === 0 && (
          <nav className="nav nav-pills flex-column">{children.map(node => renderItem(node, depth + 1))}</nav>
        )}
      </React.Fragment>
    )
  }

  return (
    <aside>
      <div>
       <img src={withPrefix("/obelisco.svg")} alt="Logo del sistema de diseño Obelisco" width="180" />
        <nav>
          <a className="nav-link nav-mobile-trigger collapsed" data-toggle="collapse" href="#sidebar-nav">
            Acerca de Obelisco
          </a>
          <div className="nav-responsive collapse" id="sidebar-nav">
            <ul className="nav nav-lg flex-column">
              {navigation.map((node: Node) => (
                <React.Fragment key={node.url}>{renderItem(node, 0)}</React.Fragment>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  )
}

interface ItemProps {
  node: Node
  depth: number
  current: string
  active?: boolean
}

const Item = (props: ItemProps) => {
  const { node, depth, current, active } = props
  const hasChildren = node.children?.length > 0
  let className = "nav-link"
  let link = node.url

  if (depth === 0) {
    link = hasChildren ? node.children[0].url : node.url
  } else {
    if (node.url === current || active) className += " active"
  }

  return (
    <li className="nav-item">
      <a className={className} href={withPrefix(link)}>
        {node.menu}
      </a>
    </li>
  )
}
