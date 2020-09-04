const path = require("path")

const pages = [
  { id: 1, content: 'test1' },
  { id: 2, content: 'test2' },
  { id: 3, content: 'test3' },
]

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (errors) {
    throw errors
  }

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.title}`,
      context: {
        html: node.html,
        title: node.frontmatter.title
      },
      component: path.resolve(__dirname, './src/components/post/template.js')
    })
  })
};