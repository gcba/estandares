import { NavItem } from "@gcba/obelisco"

export interface NavigatorProps {
  prev: {
    title: string
    url: string
  }
  next: {
    title: string
    url: string
  }
}

export interface SidebarProps {
  navigation: NavItem[]
  current: string
}

export interface TableOfContentsProps {
  items: {
    title: string
    url: string
  }[]
}