import React from 'react'

import Button from '../components/button'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Seapelt</h1>
    <nav>
      <Button to='/releases/'>Releases</Button>
      <Button to='/bio/'>Biography</Button>
      <Button to='/contact/'>Contact</Button>
    </nav>
  </Layout>
)

export default IndexPage
