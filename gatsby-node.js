/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const url = createFilePath({ node, getNode })
    createNodeField({ node, name: "url", value: url })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
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
            body
            tableOfContents(maxDepth: 2)
          }
        }
      }
    `).then(result => {
      result.data.allMdx.nodes.forEach(node => {
        createPage({
          path: node.fields.url,
          component: path.resolve(`./src/components/layout.tsx`),
          context: {
            ...node.frontmatter,
            ...node.fields,
            body: node.body,
            tableOfContents: node.tableOfContents,
          },
        })
      })
      resolve()
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions
  setWebpackConfig({
    externals: {
      jquery: "jQuery",
      bootstrap: "bootstrap",
    },
  })
}
