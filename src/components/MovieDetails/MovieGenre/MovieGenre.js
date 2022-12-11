import React from 'react'
import styles from "./MovieGenre.module.css"

const MovieGenre = ({genre}) => {
  return (
    <div className={styles.badge}>
      {genre}
    </div>
  )
}

export default MovieGenre