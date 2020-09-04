import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import '../components/blog/blog.scss'

export default function Blog() {

  const { allMarkdownRemark: { edges: posts } } = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              category
              subtitle
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="blog">
        <div className="postList">
          {[...posts, ...posts, ...posts, ...posts].map(({node}, i) => (
            <div className="item" key={i}>
              <div className="title">{node.frontmatter.title}</div>
              <div className="subTitle">{node.frontmatter.subtitle}</div>
              <div className="previewTxt">{node.excerpt}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}