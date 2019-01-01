import React from 'react'

import Button from '../button'
import styles from './styles.module.scss'

const Header = ({ title }) => (
  <header className={styles.header}>
    <nav>
      <Button to='/'>About</Button>
      <Button to='/releases/'>Releases</Button>
      <Button to='/projects/'>Projects</Button>
      <Button to='/contact/'>Contact</Button>
    </nav>

    <h1>{title}</h1>
  </header>
)

export default Header
