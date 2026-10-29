import React from 'react'
import styles from "./NavBar.module.css"
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <div className={styles.nav} >
        <Link to="/" className={styles.link}>inicio</Link>
        <Link to="/recetas" className={styles.link}>recetas</Link>
        <Link to="/contacto" className={styles.link}>contacto</Link>
    </div>
  )
}

