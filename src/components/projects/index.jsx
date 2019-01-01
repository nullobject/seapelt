import React from 'react'

import styles from './styles.module.scss'

const Project = ({ project: { date, title, location } }) => (
  <li>
    <time dateTime='{date}'>{date}</time>
    <div>
      <header>
        <h4>{title}</h4>
      </header>
      <div className={styles.location}>{location}</div>
    </div>
  </li>
)

const Projects = ({ projects }) => {
  const html = projects.map(project => <Project key={project.id} project={project} />)
  return <ul className={styles.projects}>{html}</ul>
}

export default Projects
