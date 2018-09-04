import React from 'react'
import Link from 'gatsby-link'

import Button from '../button'
import styles from './styles.module.scss'

const Header = ({title}) => (
  <header className={styles.header}>
    <h1>
      <Link to='/'>{title}</Link>
    </h1>
    <nav>
      <Button to='/'>About</Button>
      <Button to='/releases/'>Releases</Button>
      <Button to='/projects/'>Projects</Button>
      <Button to='/contact/'>Contact</Button>
    </nav>
  </header>
)

export default Header
