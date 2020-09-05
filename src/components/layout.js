import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Transition, TransitionGroup } from 'react-transition-group'

import Header from "./header/header"
import Footer from "./footer/Footer"
import ScrollView from "./scrollView/scrollView"

import "./layout.css"

const Layout = ({ children, location }) => {
  const [path, setPath] = useState('')
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  
  useEffect(() => {
    setPath(location.pathname)
  }, [])


  return (
    <TransitionGroup
      component={null}
    >
      <Transition
        key={path}
        timeout={{
          enter: 300,
          exit: 300
        }}
      >
        {status => (
          <div className={`page ${status}`}>
            <Header />
            <ScrollView />

            <div className="pageWrap wrap">
              <main>{children}</main>
            </div>

            <Footer />
          </div>
        )}
      </Transition>
    </TransitionGroup>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
