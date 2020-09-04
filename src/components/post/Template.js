import React from 'react'

import Layout from '../layout'

export default function Template(props) {
  
  return (
    <Layout>
      <div className="content" dangerouslySetInnerHTML={{__html: props.pageContext.html}}></div>
    </Layout>
  )
}