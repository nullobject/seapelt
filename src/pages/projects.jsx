import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Projects from '../components/projects'

const ProjectsPage = ({ data: { allProjectsJson: { edges } } }) => {
  const projects = edges.map(edge => edge.node)
  return (
    <Layout>
      <h2>Projects</h2>
      <Projects projects={projects} />
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          date(formatString: "MMM DD YYYY")
          title
          location
        }
      }
    }
  }
`
