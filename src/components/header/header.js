import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import SEO from "../seo"

import './header.scss'

const menuData = [
  {
    link: '/',
    label: 'Home'
  },
  {
    link: '/project',
    label: 'Project'
  },
  {
    link: '/blog',
    label: 'Blog'
  },
  {
    link: '/about',
    label: 'About'
  },
]


export default function Header() {
  const [type, setType] = useState('')
  
  
  useEffect(() => {
    setType(window.location.pathname.replace('/', '').split('/')[0])

    const headerH = document.getElementsByTagName('header')[0].offsetHeight
    document.getElementsByClassName('pageWrap')[0].style.paddingTop = `calc(${headerH}px + 3.5rem)`
  }, [])


  return (
    <header>
      <SEO title={type.slice(0, 1).toUpperCase()+type.slice(1, type.length)} />
      
      <div className="wrap">
        <div className="menu">
          {menuData.map((menu, i) => (
            <div className="item" key={i}>
              <Link to={menu.link} className={type === menu.link.replace('/', '').split('/')[0] ? 'active' : ''} >{menu.label}</Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}