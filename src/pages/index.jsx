import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>SEAPELT</h1>
    <p>Seapelt is the moniker of Byron Bay down-tempo electronica artist Josh Bassett. His music explores the lines between digital and analog, a space where the human signal blurs with the natural environment.</p>
    <p>Incorporating elements of IDM with minimised electronica, modern classical, and ambient &mdash; his tracks evoke a sense of nostalgia for the lost sounds of decades past.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
