import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  const onReload = () => {
    window.location.reload();
  }

  return (
    <header className={styles.header}>
      <h1 onClick={onReload}>Movie Search</h1>
    </header>
  )
}

export default Header