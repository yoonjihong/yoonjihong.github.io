import React from 'react'

import './pageTitle.scss'


export default function PageTitle({ title = '', info = '' }) {
  return (
    <div className="pageTitle">
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  )
}