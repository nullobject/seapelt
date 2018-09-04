import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Seapelt</h1>
    <nav>
      <Link to='/releases/'>Releases</Link>
      <Link to='/bio/'>Biography</Link>
    </nav>
  </Layout>
)

export default IndexPage
