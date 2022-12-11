import React, { useRef } from 'react'
import styles from "./Rating.module.css"

import IMDB from "./../../../img/imdb.svg"
import RottenTomatoes from "./../../../img/rottentomatoes.jpg"
import Metacritic from "./../../../img/metacritic.jpg"

const Rating = (props) => {
  const logoRef = useRef("");
  if(props.source === "Internet Movie Database") {
    logoRef.current = IMDB;
  } else if (props.source === "Rotten Tomatoes") {
    logoRef.current = RottenTomatoes;
  } else if (props.source === "Metacritic") { 
    logoRef.current = Metacritic;
  }

  return (
    <div className={styles.rating}>
      <img src={logoRef.current} alt="ratings logo"/> 
      <span>{props.value}</span>
    </div>
  )
}

export default Rating