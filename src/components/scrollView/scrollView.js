import React, { useEffect, useState } from 'react'
import produce from 'immer'

import './scrollView.scss'


export default function ScrollView() {
  const [state, setState] = useState({
    per: '0%',
    maxH: 0,
  })
  
  const OnScroll = (e) => {
    setState(produce(v => {
      v.per = window.scrollY / state.maxH * 100 + '%'
    }))
  }

  useEffect(() => {
    setState(produce(v => {
      v.maxH = document.body.offsetHeight - window.innerHeight
    }))
  }, [document.body.offsetHeight])

  useEffect(() => {
    if (state.maxH === 0) {
      return
    }
    
    window.removeEventListener('scroll', OnScroll, true)
    window.addEventListener('scroll', OnScroll)
  }, [state.maxH])


  return (
    <div className="scrollView">
      <div style={{width: state.per}}></div>
    </div>
  )
}