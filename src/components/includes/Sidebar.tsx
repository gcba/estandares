import React from "react"
import { withPrefix } from "gatsby"
import { Nav, NavItem } from "@gcba/obelisco"
import { SidebarProps } from '../../types/components/includes/Sidebar'

export const Sidebar = ({ navigation, current }: SidebarProps) => {

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
              <Nav items={navigation} navSize="large" selected={current} />
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  )
}
