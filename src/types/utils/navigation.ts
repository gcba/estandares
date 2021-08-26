// Review this namings for interfaces with a more specific and semantic names.
// ie: 'Context'Node, replace '' and Context with an appropiate descriptive name. 

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

export interface RawNode {
  frontmatter: Pick<Node, "menu" | "title" | "description" | "position" | "draft">
  fields: Pick<Node, "url" | "fakeNode">
}

export interface Data {
  allMdx: {
    nodes: RawNode[]
  }
}
