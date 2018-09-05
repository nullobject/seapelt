import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'

const Project = ({project: {date, title, location}}) => (
  <li>
    <time dateTime='{date}'>{date}</time>
    <span>{title}</span> @ <span>{location}</span>
  </li>
)

const ProjectsPage = ({data: {allProjectsJson: {edges}}}) => {
  const projects = edges.map(edge => <Project key={edge.node.id} project={edge.node} />)
  return (
    <Layout>
      <ul>{projects}</ul>
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
          date(formatString: "MMMM DD, YYYY")
          title
          location
        }
      }
    }
  }
`
