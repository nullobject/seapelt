import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Releases from '../components/releases'

const ReleasesPage = ({ data: { allReleasesJson: { edges } } }) => {
  const releases = edges.map(edge => edge.node)
  return (
    <Layout>
      <h2>Releases</h2>
      <Releases releases={releases} />
    </Layout>
  )
}

export default ReleasesPage

export const pageQuery = graphql`
  query {
    allReleasesJson {
      edges {
        node {
          id
          title
          year
          label
          cover
          url
        }
      }
    }
  }
`
