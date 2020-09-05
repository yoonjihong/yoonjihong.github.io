import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Transition, TransitionGroup } from 'react-transition-group'

import Header from "./header/header"
import Footer from "./footer/Footer"

import "./layout.css"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <TransitionGroup
      component={null}
    >
      <Transition
        key={location.pathname}
        timeout={{
          enter: 300,
          exit: 300
        }}
      >
        {status => (
          <div className={`page ${status}`}>
            <Header />

            <div className="wrap">
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
