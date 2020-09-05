import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import PageTitle from '../components/ui/pageTitle'
import Hash from '../components/hash'
import '../components/blog/blog.scss'


export default function Blog() {
  const [items, setItems] = useState([])
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

  const OnScroll = (items = []) => {
    const top = window.scrollY
    const btm = top + window.innerHeight
    
    items.forEach(item => {
      const mid = item.offsetTop + item.offsetHeight / 2

      if (top + 70 <= mid && mid <= btm - 60) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
  }


  useEffect(() => {
    setItems([...document.getElementsByClassName('blogItem')])
  }, [])

  useEffect(() => {
    if (items.length !== 0) {
      window.addEventListener('scroll', () => OnScroll(items))
      OnScroll(items)
    }
  }, [items])


  return (
    <div className="blog">
      <PageTitle 
        title="Blog"
        info="하루 한개 포스팅을 목표로 하고있어요."
      />

      <div className="postList">
        {[...posts, ...posts, ...posts, ...posts].map(({node}, i) => (
          <div className="blogItem item" key={i}>
            <div className="category">{node.frontmatter.category}</div>
            <div className="title">{node.frontmatter.title}</div>
            <div className="subTitle">{node.frontmatter.subtitle}</div>
            <div className="previewTxt">{node.excerpt}</div>
          </div>
        ))}
      </div>

      <Hash />
    </div>
  )
}